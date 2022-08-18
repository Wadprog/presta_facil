const parseCellValue = function (value = '') {
  if (value) {
    switch (value.toLowerCase()) {
      case 'yes':
        return true;
      case 'no':
        return false;
      case '':
        return false;
      default:
        return false;
    }
  }
};

export { parseCellValue };
