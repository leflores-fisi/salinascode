
export interface token {
    type: string;
    value: string;
}
export type tokenized_line = Array<token>;

export interface ast_object {
    type: string;
    [key: string]: any;
}

export interface identifier extends ast_object {
    name: string;
}
export interface literal extends ast_object {
    value: string | number | boolean | undefined;
}
export interface call_expression extends ast_object {
    type: "CallExpression";
    name: string;
    arguments: Array<ast_object>;
}
export interface variable_info extends ast_object {
    name: string;
    value: literal | call_expression | ast_object;
}
export interface variable_definitions extends ast_object {
    type: "VariableDefinitions";
    variableType: string;
    definitions: Array<variable_info>;
}

export interface statement_block extends ast_object {
    type: "StatementBlock";
    statements: Array<Array<ast_object>>;
}

export interface ast {
    type: "Program";
    name: string;
    body: statement_block;
}
