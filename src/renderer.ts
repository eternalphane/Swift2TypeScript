// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { SwiftLexer } from './transpiler/generated/SwiftLexer';
import { SwiftParser } from './transpiler/generated/SwiftParser';
window.ANTLRInputStream = ANTLRInputStream;
window.CommonTokenStream = CommonTokenStream;
window.SwiftLexer = SwiftLexer;
window.SwiftParser = SwiftParser;
