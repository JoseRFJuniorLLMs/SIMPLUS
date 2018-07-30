package com.simplus.xls;

import com.simplus.domain.Company;
import com.simplus.domain.Product;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.springframework.web.servlet.view.document.AbstractXlsView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipOutputStream;

public class ExcelViewProductZip extends AbstractXlsView {


    @Override
    protected void buildExcelDocument(Map<String, Object> model,
                                      Workbook workbook,
                                      HttpServletRequest request,
                                      HttpServletResponse response) throws Exception {

        response.setHeader("Content-Disposition", "attachment; filename=\"Relatorio.xls\"");

        List<Product> products = (List<Product>) model.get("products");
        List<Company> companys = (List<Company>) model.get("company") ;
        Sheet sheet = workbook.createSheet("Products");
        sheet.setDefaultColumnWidth(30);

        CellStyle style = workbook.createCellStyle();
        Font font = workbook.createFont();
        font.setFontName("Arial");
        style.setFillForegroundColor(HSSFColor.BLUE.index);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        font.setBold(true);
        font.setColor(HSSFColor.WHITE.index);
        style.setFont(font);

        Row header = sheet.createRow(0);

        header.createCell(0).setCellValue("GTIN");
        header.getCell(0).setCellStyle(style);
        header.createCell(1).setCellValue("Descrição");
        header.getCell(1).setCellStyle(style);
        header.createCell(2).setCellValue("Data");
        header.getCell(2).setCellStyle(style);
        header.createCell(3).setCellValue("Empresa");
        header.getCell(3).setCellStyle(style);

        int rowCount = 1;

        for (Product product : products){

            Row productRow =  sheet.createRow(rowCount++);
            productRow.createCell(0).setCellValue(product.getGtin());
            productRow.createCell(1).setCellValue(product.getDescription());
            productRow.createCell(2).setCellValue(product.getLastUpdate());
            productRow.createCell(3).setCellValue(product.getCompany().getName());

        }
    }
}
