import * as shell from 'shelljs';

// Copy schema json
shell.cp('apps/todo/schema.json', 'dist-server/apps/todo/schema.json');
