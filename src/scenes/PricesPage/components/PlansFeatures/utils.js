const parseCellValue = function (value = '') {
  if (value) {
    switch (value) {
      case 'yes':
        return true;
      case 'no':
        return false;
      case '':
        return false;
      case '∞':
        return 'Unlimited';
      default:
        return +value;
    }
  }
};

export { parseCellValue };
