export interface DeckdeckgoHighlightCodeLanguageAlias {
  [index: string]: string;
}

export interface DeckdeckgoHighlightCodeLanguage {
  title: string;
  require?: string[];
  main?: string;
}

export interface DeckdeckgoHighlightCodeLanguages {
  [index: string]: DeckdeckgoHighlightCodeLanguage;
}

export const deckdeckgoHighlightCodeLanguages: DeckdeckgoHighlightCodeLanguages = {
  markup: {title: 'Markup'},
  html: {title: 'HTML', main: 'markup'},
  xml: {title: 'XML', main: 'markup'},
  svg: {title: 'SVG', main: 'markup'},
  mathml: {title: 'MathML', main: 'markup'},
  ssml: {title: 'SSML', main: 'markup'},
  atom: {title: 'Atom', main: 'markup'},
  rss: {title: 'RSS', main: 'markup'},
  css: {title: 'CSS'},
  clike: {title: 'C-like'},
  javascript: {title: 'JavaScript'},
  js: {title: 'js', main: 'javascript'},
  abap: {title: 'ABAP'},
  abnf: {title: 'ABNF'},
  actionscript: {title: 'ActionScript'},
  ada: {title: 'Ada'},
  agda: {title: 'Agda'},
  al: {title: 'AL'},
  antlr4: {title: 'ANTLR4'},
  g4: {title: 'g4', main: 'antlr4'},
  apacheconf: {title: 'Apache Configuration'},
  apex: {title: 'Apex', require: ['sql']},
  apl: {title: 'APL'},
  applescript: {title: 'AppleScript'},
  aql: {title: 'AQL'},
  arduino: {title: 'Arduino', require: ['cpp']},
  arff: {title: 'ARFF'},
  asciidoc: {title: 'AsciiDoc'},
  adoc: {title: 'adoc', main: 'asciidoc'},
  aspnet: {title: 'ASP.NET (C#)', require: ['markup', 'csharp']},
  asm6502: {title: '6502 Assembly'},
  autohotkey: {title: 'AutoHotkey'},
  autoit: {title: 'AutoIt'},
  bash: {title: 'Bash'},
  shell: {title: 'Shell', main: 'bash'},
  basic: {title: 'BASIC'},
  batch: {title: 'Batch'},
  bbcode: {title: 'BBcode'},
  shortcode: {title: 'Shortcode', main: 'bbcode'},
  birb: {title: 'Birb'},
  bison: {title: 'Bison', require: ['c']},
  bnf: {title: 'BNF'},
  rbnf: {title: 'RBNF', main: 'bnf'},
  brainfuck: {title: 'Brainfuck'},
  brightscript: {title: 'BrightScript'},
  bro: {title: 'Bro'},
  bsl: {title: 'BSL (1C:Enterprise)'},
  oscript: {title: 'OneScript', main: 'bsl'},
  c: {title: 'C'},
  csharp: {title: 'C#'},
  cs: {title: 'cs', main: 'csharp'},
  dotnet: {title: 'dotnet', main: 'csharp'},
  cpp: {title: 'C++', require: ['c']},
  chaiscript: {title: 'ChaiScript', require: ['cpp']},
  cil: {title: 'CIL'},
  clojure: {title: 'Clojure'},
  cmake: {title: 'CMake'},
  coffeescript: {title: 'CoffeeScript'},
  coffee: {title: 'coffee', main: 'coffeescript'},
  concurnas: {title: 'Concurnas'},
  conc: {title: 'conc', main: 'concurnas'},
  csp: {title: 'Content-Security-Policy'},
  crystal: {title: 'Crystal', require: ['ruby']},
  'css-extras': {title: 'CSS Extras', require: ['css']},
  cypher: {title: 'Cypher'},
  d: {title: 'D'},
  dart: {title: 'Dart'},
  dataweave: {title: 'DataWeave'},
  dax: {title: 'DAX'},
  dhall: {title: 'Dhall'},
  diff: {title: 'Diff'},
  django: {title: 'Django/Jinja2', require: ['markup-templating']},
  jinja2: {title: 'jinja2', main: 'django', require: ['markup-templating']},
  'dns-zone-file': {title: 'DNS zone file'},
  'dns-zone': {title: 'dns-zone', main: 'dns-zone-file'},
  docker: {title: 'Docker'},
  dockerfile: {title: 'dockerfile', main: 'docker'},
  dot: {title: 'DOT (Graphviz)'},
  gv: {title: 'gv', main: 'dot'},
  ebnf: {title: 'EBNF'},
  editorconfig: {title: 'EditorConfig'},
  eiffel: {title: 'Eiffel'},
  ejs: {title: 'EJS', require: ['markup-templating']},
  eta: {title: 'Eta', main: 'ejs', require: ['markup-templating']},
  elixir: {title: 'Elixir'},
  elm: {title: 'Elm'},
  etlua: {title: 'Embedded Lua templating', require: ['lua', 'markup-templating']},
  erb: {title: 'ERB', require: ['ruby', 'markup-templating']},
  erlang: {title: 'Erlang'},
  'excel-formula': {title: 'Excel Formula'},
  xlsx: {title: 'xlsx', main: 'excel-formula'},
  xls: {title: 'xls', main: 'excel-formula'},
  fsharp: {title: 'F#'},
  factor: {title: 'Factor'},
  'firestore-security-rules': {title: 'Firestore security rules'},
  flow: {title: 'Flow'},
  fortran: {title: 'Fortran'},
  ftl: {title: 'FreeMarker Template Language', require: ['markup-templating']},
  gml: {title: 'GameMaker Language'},
  gamemakerlanguage: {title: 'gamemakerlanguage', main: 'gml'},
  gcode: {title: 'G-code'},
  gdscript: {title: 'GDScript'},
  gedcom: {title: 'GEDCOM'},
  gherkin: {title: 'Gherkin'},
  git: {title: 'Git'},
  glsl: {title: 'GLSL', require: ['c']},
  go: {title: 'Go'},
  graphql: {title: 'GraphQL'},
  groovy: {title: 'Groovy'},
  haml: {title: 'Haml', require: ['ruby']},
  handlebars: {title: 'Handlebars', require: ['markup-templating']},
  haskell: {title: 'Haskell'},
  hs: {title: 'hs', main: 'haskell'},
  haxe: {title: 'Haxe'},
  hcl: {title: 'HCL'},
  hlsl: {title: 'HLSL', require: ['c']},
  http: {title: 'HTTP'},
  hpkp: {title: 'HTTP Public-Key-Pins'},
  hsts: {title: 'HTTP Strict-Transport-Security'},
  ichigojam: {title: 'IchigoJam'},
  icon: {title: 'Icon'},
  ignore: {title: '.ignore'},
  gitignore: {title: '.gitignore', main: 'ignore'},
  hgignore: {title: '.hgignore', main: 'ignore'},
  npmignore: {title: '.npmignore', main: 'ignore'},
  inform7: {title: 'Inform 7'},
  ini: {title: 'Ini'},
  io: {title: 'Io'},
  j: {title: 'J'},
  java: {title: 'Java'},
  javadoc: {title: 'JavaDoc', require: ['markup', 'java', 'javadoclike']},
  javadoclike: {title: 'JavaDoc-like'},
  javastacktrace: {title: 'Java stack trace'},
  jolie: {title: 'Jolie'},
  jq: {title: 'JQ'},
  jsdoc: {title: 'JSDoc', require: ['javadoclike', 'typescript']},
  'js-extras': {title: 'JS Extras'},
  json: {title: 'JSON'},
  webmanifest: {title: 'Web App Manifest', main: 'json'},
  json5: {title: 'JSON5', require: ['json']},
  jsonp: {title: 'JSONP', require: ['json']},
  jsstacktrace: {title: 'JS stack trace'},
  'js-templates': {title: 'JS Templates'},
  julia: {title: 'Julia'},
  keyman: {title: 'Keyman'},
  kotlin: {title: 'Kotlin'},
  kt: {title: 'kt', main: 'kotlin'},
  kts: {title: 'Kotlin Script', main: 'kotlin'},
  latex: {title: 'LaTeX'},
  tex: {title: 'TeX', main: 'latex'},
  context: {title: 'ConTeXt', main: 'latex'},
  latte: {title: 'Latte', require: ['markup-templating', 'php']},
  less: {title: 'Less', require: ['css']},
  lilypond: {title: 'LilyPond', require: ['scheme']},
  ly: {title: 'ly', main: 'lilypond', require: ['scheme']},
  liquid: {title: 'Liquid'},
  lisp: {title: 'Lisp'},
  emacs: {title: 'emacs', main: 'lisp'},
  elisp: {title: 'elisp', main: 'lisp'},
  'emacs-lisp': {title: 'emacs-lisp', main: 'lisp'},
  livescript: {title: 'LiveScript'},
  llvm: {title: 'LLVM IR'},
  lolcode: {title: 'LOLCODE'},
  lua: {title: 'Lua'},
  makefile: {title: 'Makefile'},
  markdown: {title: 'Markdown', require: ['markup']},
  md: {title: 'md', main: 'markdown', require: ['markup']},
  'markup-templating': {title: 'Markup templating', require: ['markup']},
  matlab: {title: 'MATLAB'},
  mel: {title: 'MEL'},
  mizar: {title: 'Mizar'},
  mongodb: {title: 'MongoDB'},
  monkey: {title: 'Monkey'},
  moonscript: {title: 'MoonScript'},
  moon: {title: 'moon', main: 'moonscript'},
  n1ql: {title: 'N1QL'},
  n4js: {title: 'N4JS'},
  n4jsd: {title: 'n4jsd', main: 'n4js'},
  'nand2tetris-hdl': {title: 'Nand To Tetris HDL'},
  naniscript: {title: 'Naninovel Script'},
  nani: {title: 'nani', main: 'naniscript'},
  nasm: {title: 'NASM'},
  neon: {title: 'NEON'},
  nginx: {title: 'nginx'},
  nim: {title: 'Nim'},
  nix: {title: 'Nix'},
  nsis: {title: 'NSIS'},
  objectivec: {title: 'Objective-C', require: ['c']},
  objc: {title: 'objc', main: 'objectivec', require: ['c']},
  ocaml: {title: 'OCaml'},
  opencl: {title: 'OpenCL', require: ['c']},
  oz: {title: 'Oz'},
  parigp: {title: 'PARI/GP'},
  parser: {title: 'Parser', require: ['markup']},
  pascal: {title: 'Pascal'},
  objectpascal: {title: 'Object Pascal', main: 'pascal'},
  pascaligo: {title: 'Pascaligo'},
  psl: {title: 'PATROL Scripting Language'},
  pcaxis: {title: 'PC-Axis'},
  px: {title: 'px', main: 'pcaxis'},
  peoplecode: {title: 'PeopleCode'},
  pcode: {title: 'pcode', main: 'peoplecode'},
  perl: {title: 'Perl'},
  php: {title: 'PHP', require: ['markup-templating']},
  phpdoc: {title: 'PHPDoc', require: ['php', 'javadoclike']},
  'php-extras': {title: 'PHP Extras', require: ['php']},
  plsql: {title: 'PL/SQL', require: ['sql']},
  powerquery: {title: 'PowerQuery'},
  pq: {title: 'pq', main: 'powerquery'},
  mscript: {title: 'mscript', main: 'powerquery'},
  powershell: {title: 'PowerShell'},
  processing: {title: 'Processing'},
  prolog: {title: 'Prolog'},
  promql: {title: 'PromQL'},
  properties: {title: '.properties'},
  protobuf: {title: 'Protocol Buffers'},
  pug: {title: 'Pug', require: ['markup']},
  puppet: {title: 'Puppet'},
  pure: {title: 'Pure'},
  purebasic: {title: 'PureBasic'},
  pbfasm: {title: 'pbfasm', main: 'purebasic'},
  purescript: {title: 'PureScript', require: ['haskell']},
  purs: {title: 'purs', main: 'purescript', require: ['haskell']},
  python: {title: 'Python'},
  py: {title: 'py', main: 'python'},
  q: {title: 'Q (kdb+ database)'},
  qml: {title: 'QML'},
  qore: {title: 'Qore'},
  r: {title: 'R'},
  racket: {title: 'Racket', require: ['scheme']},
  rkt: {title: 'rkt', main: 'racket', require: ['scheme']},
  jsx: {title: 'React JSX', require: ['markup']},
  tsx: {title: 'React TSX', require: ['jsx', 'typescript']},
  reason: {title: 'Reason'},
  regex: {title: 'Regex'},
  renpy: {title: "Ren'py"},
  rpy: {title: 'rpy', main: 'renpy'},
  rest: {title: 'reST (reStructuredText)'},
  rip: {title: 'Rip'},
  roboconf: {title: 'Roboconf'},
  robotframework: {title: 'Robot Framework'},
  robot: {title: 'robot', main: 'robotframework'},
  ruby: {title: 'Ruby'},
  rb: {title: 'rb', main: 'ruby'},
  rust: {title: 'Rust'},
  sas: {title: 'SAS'},
  sass: {title: 'Sass (Sass)', require: ['css']},
  scss: {title: 'Sass (Scss)', require: ['css']},
  scala: {title: 'Scala', require: ['java']},
  scheme: {title: 'Scheme'},
  'shell-session': {title: 'Shell session', require: ['bash']},
  'sh-session': {title: 'sh-session', main: 'shell-session', require: ['bash']},
  shellsession: {title: 'shellsession', main: 'shell-session', require: ['bash']},
  smali: {title: 'Smali'},
  smalltalk: {title: 'Smalltalk'},
  smarty: {title: 'Smarty', require: ['markup-templating']},
  sml: {title: 'SML'},
  smlnj: {title: 'SML/NJ', main: 'sml'},
  solidity: {title: 'Solidity (Ethereum)'},
  sol: {title: 'sol', main: 'solidity'},
  'solution-file': {title: 'Solution file'},
  sln: {title: 'sln', main: 'solution-file'},
  soy: {title: 'Soy (Closure Template)', require: ['markup-templating']},
  sparql: {title: 'SPARQL', require: ['turtle']},
  rq: {title: 'rq', main: 'sparql', require: ['turtle']},
  'splunk-spl': {title: 'Splunk SPL'},
  sqf: {title: 'SQF: Status Quo Function (Arma 3)'},
  sql: {title: 'SQL'},
  stan: {title: 'Stan'},
  iecst: {title: 'Structured Text (IEC 61131-3)'},
  stylus: {title: 'Stylus'},
  swift: {title: 'Swift'},
  't4-templating': {title: 'T4 templating'},
  't4-cs': {title: 'T4 Text Templates (C#)', require: ['t4-templating', 'csharp']},
  t4: {title: 't4', main: 't4-cs', require: ['t4-templating', 'csharp']},
  't4-vb': {title: 'T4 Text Templates (VB)', require: ['t4-templating', 'vbnet']},
  tap: {title: 'TAP', require: ['yaml']},
  tcl: {title: 'Tcl'},
  tt2: {title: 'Template Toolkit 2', require: ['markup-templating']},
  textile: {title: 'Textile', require: ['markup']},
  toml: {title: 'TOML'},
  turtle: {title: 'Turtle'},
  trig: {title: 'TriG', main: 'turtle'},
  twig: {title: 'Twig', require: ['markup']},
  typescript: {title: 'TypeScript'},
  ts: {title: 'ts', main: 'typescript'},
  typoscript: {title: 'TypoScript'},
  tsconfig: {title: 'TSConfig', main: 'typoscript'},
  unrealscript: {title: 'UnrealScript'},
  uscript: {title: 'uscript', main: 'unrealscript'},
  uc: {title: 'uc', main: 'unrealscript'},
  uri: {title: 'URI'},
  url: {title: 'URL', main: 'uri'},
  v: {title: 'V'},
  vala: {title: 'Vala'},
  vbnet: {title: 'VB.Net', require: ['basic']},
  velocity: {title: 'Velocity', require: ['markup']},
  verilog: {title: 'Verilog'},
  vhdl: {title: 'VHDL'},
  vim: {title: 'vim'},
  'visual-basic': {title: 'Visual Basic'},
  vb: {title: 'vb', main: 'visual-basic'},
  vba: {title: 'VBA', main: 'visual-basic'},
  warpscript: {title: 'WarpScript'},
  wasm: {title: 'WebAssembly'},
  wiki: {title: 'Wiki markup', require: ['markup']},
  xeora: {title: 'Xeora', require: ['markup']},
  xeoracube: {title: 'XeoraCube', main: 'xeora', require: ['markup']},
  'xml-doc': {title: 'XML doc (.net)', require: ['markup']},
  xojo: {title: 'Xojo (REALbasic)'},
  xquery: {title: 'XQuery', require: ['markup']},
  yaml: {title: 'YAML'},
  yml: {title: 'yml', main: 'yaml'},
  yang: {title: 'YANG'},
  zig: {title: 'Zig'},
};
