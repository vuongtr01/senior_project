const FileNameAndSize = r => (`${r.name} (${Math.ceil(r.size / 1e5) / 10}MB)`);

export { FileNameAndSize as default };
