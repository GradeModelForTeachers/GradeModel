import path from 'path';
import fs from 'fs';
import Essay from "./essay";

class EssayCollection {
  static fromDirectory(directory) {
    return new EssayCollection(directory);
  }

  storeEssays() {
    const fullDirectoryPath = path.resolve(this.directory);
    const files = fs.readdirSync(fullDirectoryPath);
    return files.map((essayFile) => {
      return Essay.fromEssayObject(this.directory, essayFile);
    });
  }

  constructor(directory) {
    this.directory = directory;
    this.essays = this.storeEssays();
  }
}

export default EssayCollection;
