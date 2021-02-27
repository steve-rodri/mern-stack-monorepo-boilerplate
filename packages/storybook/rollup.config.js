import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import multi from "@rollup/plugin-multi-entry";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/components/*.js",
    output: {
      dir: "dist/",
      format: "esm",
    },
    watch: {
      include: "src/components/**",
    },
    plugins: [
      multi({ entryFileName: "bundle.js" }),
      resolve(),
      external(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      terser(),
    ],
  },
];
