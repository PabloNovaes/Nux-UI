#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const shouldUpdate = args.includes("--update-existing");

const playgroundPkgPath = path.join(__dirname, "..", "..", "package.json");
const libPkgPath = path.join(__dirname, "..", "package.json");

const playgroundPkg = JSON.parse(fs.readFileSync(playgroundPkgPath, "utf-8"));
const libPkg = JSON.parse(fs.readFileSync(libPkgPath, "utf-8"));

const ignoreList = ["expo", "expo-router", "expo-status-bar", "react", "react-native"];

if (!libPkg.dependencies) libPkg.dependencies = {};

const source = playgroundPkg.dependencies || {};
let added = 0;
let updated = 0;

for (const [dep, version] of Object.entries(source)) {
    if (!ignoreList.includes(dep)) {
        const current = libPkg.dependencies[dep];
        if (!current) {
            libPkg.dependencies[dep] = version;
            added++;
        } else if (shouldUpdate && current !== version) {
            libPkg.dependencies[dep] = version;
            updated++;
        }
    }
}

fs.writeFileSync(libPkgPath, JSON.stringify(libPkg, null, 2));

console.log(`✅ ${added} nova(s) dependência(s) adicionada(s)`);
if (shouldUpdate) console.log(`♻️  ${updated} dependência(s) atualizada(s)`);
