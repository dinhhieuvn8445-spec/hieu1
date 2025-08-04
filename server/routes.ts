import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { googleSheetsService } from "./googleSheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      
      // Gửi dữ liệu đến Google Sheets
      try {
        await googleSheetsService.addRegistration(registration);
        console.log('Đã gửi dữ liệu đăng ký đến Google Sheets');
      } catch (sheetsError) {
        console.error('Lỗi khi gửi đến Google Sheets:', sheetsError);
        // Không làm fail toàn bộ request nếu Google Sheets lỗi
      }
      
      res.json({ success: true, registration });
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
      res.status(400).json({ error: "Invalid registration data" });
    }
  });

  // Get registrations endpoint (for admin purposes)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getRegistrations();
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch registrations" });
    }
  });

  // Initialize Google Sheets header
  app.post("/api/init-sheets", async (req, res) => {
    try {
      await googleSheetsService.createHeaderRow();
      res.json({ success: true, message: "Đã khởi tạo header cho Google Sheets" });
    } catch (error) {
      console.error('Lỗi khởi tạo Google Sheets:', error);
      res.status(500).json({ error: "Failed to initialize Google Sheets" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
