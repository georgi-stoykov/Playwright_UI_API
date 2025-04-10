import fileSystem from "fs";
import path from "path";

export default class PathHelper {
    public static buildFilePathFromRoot(pathToFile: string[]) {
        const root = `${__dirname}/..`;
        return path.resolve(root, ...pathToFile);
    }

    public static checkFileExists(path: string) {
        return fileSystem.existsSync(path);
    }

    public static ConstantPaths = {
        COOKIE: PathHelper.buildFilePathFromRoot([
            "utils",
            "customerAuthToken.json",
        ]),
    };
}
