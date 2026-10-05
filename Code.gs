function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var rows = sheet.getRange("A6:F36").getValues();
  var dataList = [];
  
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row[1] !== "") {
      dataList.push({
        no: row[0],
        namaPTK: row[1],
        namaMurid: row[2],
        tanggalLahir: row[3],
        kelas: row[4],
        lembaga: row[5]
      });
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify(dataList))
                      .setMimeType(ContentService.MimeType.JSON);
}
