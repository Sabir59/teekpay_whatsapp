type Styles = { [key: string]: string };

function createScn(styles: Styles) {
  return function (classNames: string): string {
    var normalizedClassNames = classNames.trim().split(/\s+/);
    return normalizedClassNames
      .map(function (className) {
        return styles[className];
      })
      .join(' ');
  };
}

export default createScn;
