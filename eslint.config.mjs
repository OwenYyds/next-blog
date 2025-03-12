import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 禁用强制使用分号
      semi: ["error", "never"],
      // 如果需要在导入语句后强制不使用分号
      "import/no-duplicates": ["error", { considerQueryString: true }],
    },
  },
];

export default eslintConfig;
