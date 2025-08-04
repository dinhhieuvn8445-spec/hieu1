import { google } from 'googleapis';
import type { InsertRegistration } from '@shared/schema';
import * as fs from 'fs';
import * as path from 'path';

export class GoogleSheetsService {
  private sheets: any;
  private auth: any;

  constructor() {
    this.initializeAuth();
  }

  private async initializeAuth() {
    try {
      // Thử sử dụng environment variable trước
      let credentials;
      const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
      
      if (serviceAccountKey) {
        try {
          credentials = JSON.parse(serviceAccountKey);
          console.log('Sử dụng GOOGLE_SERVICE_ACCOUNT_KEY từ environment');
        } catch (parseError) {
          console.error('GOOGLE_SERVICE_ACCOUNT_KEY không phải là JSON hợp lệ:', parseError);
        }
      }
      
      // Nếu không có env var, sử dụng credentials trực tiếp
      if (!credentials) {
        try {
          credentials = {
            "type": "service_account",
            "project_id": "make-gg-drive-vs2-455801",
            "private_key_id": "ec7418a851673e76b84a45ba188acbfa836bf39a",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZOTUudZvIplWF\nV6ifN4qMNr9r/zgzjrGa69tIdsRVY8HZVts7lGXm/zbwfSLp9BZKET/tdEp7t5xg\nRwy3UNdGBbrWGoQspdDtUWwTXmV81je4CWLoI+BWJicv4rcnQiVL85VpHshYv4zv\nKykwbZVXPWaNR7Kn/7TCzsRWxsB9s7Q06cp0ygzLSpcK5GK+WlE0pjNfCUXUhC9+\n37jLw1TPDqeKc1+SpfSzKtOJEX4YMjYpI4+0laBT3MkrKyjbDAE3N2a1EPF44gYt\nae7fyF9J0CjepEaB3b9eMjdQyFY8cRFWvukj/2C8ZQKFcMszCWpPzBSgxw0GNty+\npw+/PHcLAgMBAAECggEABAq1z3EEV5yF7KytAsIaBmyRUZoz5bmxKJOJFLJmQcaT\noICmlBS/BKg6xo6DFdc+5CUj2T4+vh1xlkRT0xIUqRiUuCM7eZY+hnvraDzarDnY\ntCytwQVUp9fLjFjxM5Sg7wfxIQYq9EECGBpiDjWgpr6w59mMao18DB7cA5o1IstW\n/3rHT2PI/wmsWio3y6zSiqZ8Ii2appGb6XcUI/MFMMlLSeIQ2dYL4E3XOiANXs4g\nVzsFvYgJklqDbLTy2y1jWRaAN8Jzv8CBODaIZtbPEmyzGm/yf43xvHRsQCcerPMX\nBc7CL1c+X4PKA7CEmVAm/ZQSmO3/Ri0q9pTcDDUcsQKBgQDw89Ki3Tk0FJ++cu9G\nDiY1zPwZ0oTrwBPXViQTqFu+O/M+gDaqtHqgpP/ucZ/mvdNDsdajAl3KpPPYYpjU\njiCwDzDcn+pPmGtx6Z0JKidrkVrW+Q7RMmqrpnpTbzz6LDRi00+V0EcewLQKxMpj\n4r+1mNKD6ENFzZ+2ipNr18Q8mQKBgQDmygXkmzJjA77q9KWE5HdCK7WQUGmZNxiq\nLDZpPM8xX2OclR7OR/9I0/KaeNSmFAoTeCMSYtruZpMY1aMK0yJM8J3a+uV5PmoW\n676Hf8cWWNcsyGt8MAWTrMlitw9hO7llpHVlmQbE292zRMAn26KuaM1xQfXNX4I8\ncfGgcvNTQwKBgAydRy69lCwU1FQdIkexn/B7HcugSNMqyB8i5FqfGsZ3zwE7pyEC\nt9THLprmGe/ziibmHY2FJzHftuBiMQwXsMBm2zEBsjueiCl7iHwdV9j60B2nBk6P\nbCQ2X/sUPMYAIHH4DBeUwtRqVEKoEMxv54dzS7oaI8N4w17EHHmt3xkpAoGBAIBY\nTRqq7ESAKsZDM2FKJMBZymjtLyyTpVXNrJytwpO0dpL3ouAYzfFUXRBmreuGLWxS\nXT62VwZJaPhgpoE4lVSwYzkKWl8oxJrmk1iLSM42rcMr2gqAMjnD12LcZuMt8ZaC\n9P6BMXB8zTgKvcnsrPXNNqMLiYSi3qx6uWL/Si49AoGAR3T4CJWH181FK/qa0zY5\nbd3BAa+XT3xqidqy58ccG5G/dWzR/NpBZU8+7rHWvBXpJknbMIssNFIlT6K4ekSE\n3stJvouLtfRdGOMjGd63fqw1gtTp8Xa/aAnOjHHN/Z11Ra7WcUNY6E9cUnyv7PZk\nK+8UclnHp9mKNmddQXH9g3U=\n-----END PRIVATE KEY-----\n",
            "client_email": "kingaihpt@make-gg-drive-vs2-455801.iam.gserviceaccount.com",
            "client_id": "102637928147858939622",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/kingaihpt%40make-gg-drive-vs2-455801.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
          };
          console.log('Sử dụng service account key được cấu hình sẵn');
        } catch (error) {
          console.log('Lỗi cấu hình credentials:', error);
          return;
        }
      }
      
      if (!credentials) {
        console.log('Không tìm thấy Google Service Account credentials');
        return;
      }
      
      this.auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
      console.log('Đã khởi tạo Google Sheets auth thành công');
    } catch (error) {
      console.error('Lỗi khởi tạo Google Sheets auth:', error);
    }
  }

  async addRegistration(registration: InsertRegistration & { id: string; createdAt: Date }) {
    try {
      if (!this.sheets) {
        console.log('Google Sheets chưa được khởi tạo - bỏ qua việc gửi dữ liệu');
        return;
      }

      const values = [
        [
          registration.id,
          registration.fullname,
          registration.email,
          registration.phone,
          registration.selectedCourse,
          registration.notes || '',
          registration.createdAt.toISOString(),
        ],
      ];

      const sheetId = '1Iup0DGtYbPQVAfK2DBuUvqo2qhZxnTAaQKHwb77heyA';
      
      const request = {
        spreadsheetId: sheetId,
        range: 'A:G', // Cột A đến G (không cần tên sheet cụ thể)
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values,
        },
      };

      const response = await this.sheets.spreadsheets.values.append(request);
      console.log('Đã thêm dữ liệu vào Google Sheets:', response.data);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi thêm dữ liệu vào Google Sheets:', error);
      throw error;
    }
  }

  async createHeaderRow() {
    try {
      if (!this.sheets) {
        throw new Error('Google Sheets chưa được khởi tạo - kiểm tra Google Service Account Key');
      }

      const headers = [
        ['ID', 'Họ tên', 'Email', 'Số điện thoại', 'Khóa học', 'Ghi chú', 'Ngày đăng ký']
      ];

      const sheetId = '1Iup0DGtYbPQVAfK2DBuUvqo2qhZxnTAaQKHwb77heyA';
      
      const request = {
        spreadsheetId: sheetId,
        range: 'A1:G1',
        valueInputOption: 'RAW',
        resource: {
          values: headers,
        },
      };

      await this.sheets.spreadsheets.values.update(request);
      console.log('Đã tạo header row cho Google Sheets');
    } catch (error) {
      console.error('Lỗi khi tạo header row:', error);
      throw error;
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();