
/*================================LEXICO=============================*/
%{
    let Nodo=require('./nodo_arbol');
    let tbl_error="";
%}
/* lexical grammar */
%lex
%options case-insensitive
%%

"//".*				%{return 'Tk_comentario'; %} 	
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]	%{return 'Tk_comentario'; %} 

"++"    %{return 'tk_adicion'; %} 
"--"    %{return 'tk_sustraccion'; %}
"+"     %{return 'tk_mas'; %} 
"-"     %{return 'tk_menos'; %} 
"*"     %{return 'tk_multiplicacion'; %} 
"/"     %{return 'tk_diagonal'; %}  
":"     %{return 'tk_dosPuntos'; %}
";"     %{return 'tk_PuntoYComa'; %} 
"."     %{return 'tk_Punto'; %} 
","     %{return 'tk_coma'; %}
">="    %{return 'tk_mayorOigual'; %} 
"<="    %{return 'tk_menorOigual'; %}
"=="    %{return 'tk_dobleIgual'; %}
"="     %{return 'tk_igual'; %}  
"!="    %{return 'tk_diferenteDe'; %} 
"<"     %{return 'tk_menorQue'; %} 
">"     %{return 'tk_mayorQue'; %}  
"\\"     %{return 'tk_diagonalInvertida'; %} 
"^"     %{return 'tk_Potencia';%}
"&&"    %{return 'tk_And';%}
"||"	%{return 'tk_Or';%}
"!"     %{return 'tk_not';%}

[0-9]+\b              %{  return 'tk_entero';  %}
[0-9]+("."[0-9]+)?\b     %{  return 'tk_decimal'; %}

"default"           %{  return 'tk_default'; %}
"static"            %{  return 'tk_static'; %}
"BREAK"             %{  return 'tk_break';   %}
"CONTINUE"             %{  return 'tk_continue';   %}
"RETURN"             %{  return 'tk_return';   %}
"MAIN"             %{  return 'tk_main';   %}
"ARGS"             %{  return 'tk_args';   %}
"PUBLIC"             %{  return 'tk_public';   %}
"PRIVATE"             %{  return 'tk_private';   %}
"SWITCH"              %{ return 'tk_switch';    %}
"CASE"                  %{return 'tk_case';     %}
"VOID"             %{  return 'tk_void';   %}
"SYSTEM"             %{  return 'tk_system';   %}
"OUT"             %{  return 'tk_out';   %}
"PRINTLN"             %{  return 'tk_println';   %}
"PRINT"             %{  return 'tk_print';   %}
"INTERFACE"             %{  return 'tk_interface';   %}
"class"             %{  return 'tk_class';   %}
"FOR"             %{  return 'tk_for';   %}
"IF"             %{  return 'tk_if';   %}
"ELSE"             %{  return 'tk_else';   %}
"WHILE"             %{  return 'tk_while';   %}
"DO"             %{  return 'tk_do';   %}
"DOUBLE"        %{return 'tk_double';%}
"INT"             %{  return 'tk_int';   %}
"BOOLEAN"             %{  return 'tk_boolean';   %}
"FLOAT"             %{  return 'tk_float';   %}
"STRING"             %{  return 'tk_string';   %}
"CHAR"             %{  return 'tk_char';   %}
"TRUE"             %{  return 'tk_true';   %}
"FALSE"             %{  return 'tk_false';   %}

")"    %{return 'tk_ParentesisC';%} 
"("    %{return 'tk_ParentesisA';%} 
"["    %{return 'tk_CorcheteA';%} 
"]"    %{return 'tk_CorcheteC';%} 
"{"    %{return 'tk_LlaveA';%}  
"}"     %{return 'tk_LlaveC';%}


\"[^\"]*\"	        {return 'tk_cadena';}
"'"[^']"'"		{return 'tk_caracter';} 
([a-zA-Z])[a-zA-Z0-9_]*	{return 'tk_identificador';}

[ \t\r\n\f]+         { /*se ignoran*/ }

<<EOF>>               return 'EOF';
.					{ 
                        console.log('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                        
                    }
/lex


/*================================SINTACTICO=============================*/

%left 'tk_Or'
%left 'tk_And'
%left 'tk_dobleIgual' 'tk_diferenteDe'
%left 'tk_mayorQue' 'tk_menorQue' 'tk_menorOigual' 'tk_mayorOigual'
%left 'tk_mas' 'tk_menos'
%right 'tk_adicion' 'tk_sustraccion' 'tk_Potencia'
%left 'tk_coma'
%left 'tk_multiplicacion' 'tk_diagonal'
%right 'tk_menos' 'UNOT'

%start INICIO

%% 

INICIO: INSTRUCCIONES EOF {$$= new Nodo("INICIO","");
        $$.agregarHijo($1);
        return{ast: $$ , tabla_error: tbl_error};;
        };

INSTRUCCIONES:  INSTRUCCIONES INSTRUCCION{$$= new Nodo("INSTRUCCIONES","");
                                        $$.agregarHijo($1);
                                        $$.agregarHijo($2);
}
                |INSTRUCCION { $$= new Nodo("INSTRUCCIONES","");
                                $$.agregarHijo($1);
                };
                
INSTRUCCION: DECLARACION tk_PuntoYComa{ $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("Declarcion", "Declaracion")); 
                                        }
        | IMPRIMIR tk_PuntoYComa { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("Imprimir", "Imprimir")); 
                                        }
        | ASIGNACION tk_PuntoYComa{ $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("Asignacion", "Asignacion")); 
                                        }
        | IF    { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("If", "If")); 
                                        }
        | WHILE { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("WHILE", "WHILE")); 
                                        }
        | FOR   { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("Declarcion", "Declaracion")); 
                                        }
        | DO    tk_PuntoYComa   { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("DO", "DO")); 
                                        }
        | COMENTARIO    { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("Comentario", "Comentario")); 
                                        }
        | CLASE         { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("Clase", "Clase")); 
                                        }
        | LLAMAMETODO  { $$ = new Nodo("INSTRUCCION","");
                                        $$.agregarHijo(new Nodo("LlamadaMetodo", "LlamadaMetodo")); 
                                        }
        | error tk_PuntoYComa {console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);};



DECLARACION: TIPO tk_identificador tk_igual EXPRESION   { $$ = new Nodo("DELCLARACION","");
                                        $$.agregarHijo($1);
                                        $$.agregarHijo($2);
                                        $$.agregarHijo(new Nodo("=","igual"));
                                        $$.agregarHijo($4); 
                                        };

TIPO: tk_int { $$ = new Nodo("TIPO","");
                                        $$.agregarHijo($1); 
                                        }
        | tk_double{ $$ = new Nodo("TIPO","");
                                        $$.agregarHijo($1); 
                                        }
        | tk_boolean{ $$ = new Nodo("TIPO","");
                                        $$.agregarHijo($1); 
                                        }
        | tk_char{ $$ = new Nodo("TIPO","");
                                        $$.agregarHijo($1); 
                                        };

ASIGNACION: tk_identificador tk_igual EXPRESION{ $$ = new Nodo("ASIGNACION","");
                                        $$.agregarHijo($1);
                                        $$.agregarHijo(new Nodo("=","igual")); 
                                        $$.agregarHijo($3);
                                        };

IF:     tk_if   tk_ParentesisA  EXPRESION       tk_ParentesisC  SENTENCIAS{ $$ = new Nodo("IF","");
                                        $$.agregarHijo(new Nodo("If","IF"));
                                        $$.agregarHijo(new Nodo("(","PARENTESIS A"));
                                        $$.agregarHijo($3);
                                        $$.agregarHijo(new Nodo(")","PARENTESISC"));
                                        $$.agregarHijo($5);
                                        }
        | tk_if   tk_ParentesisA  EXPRESION       tk_ParentesisC  SENTENCIAS      tk_else SENTENCIAS{ $$ = new Nodo("IF","");
                                        $$.agregarHijo(new Nodo("If","IF"));
                                        $$.agregarHijo(new Nodo("(","PARENTESIS A"));
                                        $$.agregarHijo($3);
                                        $$.agregarHijo(new Nodo(")","PARENTESISC"));
                                        $$.agregarHijo(new Nodo("else","ELSE"));
                                        $$.agregarHijo($6);
                                        };

WHILE:  tk_while        tk_ParentesisA  EXPRESION       tk_ParentesisC  SENTENCIAS{ $$ = new Nodo("WHILE","");
                                        $$.agregarHijo(new Nodo("While","WHILE"));
                                        $$.agregarHijo(new Nodo("(","PARENTESIS A"));
                                        $$.agregarHijo($3);
                                        $$.agregarHijo(new Nodo(")","PARENTESISC"));
                                        $$.agregarHijo($5);
                                        };

FOR: tk_for tk_ParentesisA      DECLARACION     EXPRESION       EXPRESION       tk_ParentesisC SENTENCIAS{ $$ = new Nodo("FOR","");
                                        $$.agregarHijo(new Nodo("for","FOR"));
                                        $$.agregarHijo(new Nodo("(","PARENTESIS A"));
                                        $$.agregarHijo($3);
                                        $$.agregarHijo($4);
                                        $$.agregarHijo($5);
                                        $$.agregarHijo(new Nodo(")","PARENTESISC"));
                                        $$.agregarHijo($7);
                                        };

DO:     tk_do   SENTENCIAS WHILE{ $$ = new Nodo("DO","");
                                        $$.agregarHijo(new Nodo("Do","DOWHILE"));
                                        $$.agregarHijo($2);
                                        $$.agregarHijo($3);
                                        };

COMENTARIO: Tk_comentario{ $$ = new Nodo("COMENTARIO","");
                        $$.agregarHijo($1);
};

IMPRIMIR: tk_system tk_Punto    tk_out tk_Punto  IMPRIMIRPRIMA   CONTENIDO{ $$ = new Nodo("IMPRIMIR","");
                                        $$.agregarHijo(new Nodo("System","SYSTEM"));
                                        $$.agregarHijo(new Nodo(".","PUNTO"));
                                        $$.agregarHijo(new Nodo("out","OUT"));
                                        $$.agregarHijo(new Nodo(".","PUNTO"));
                                        $$.agregarHijo($5);
                                        $$.agregarHijo($6);
                                        };

IMPRIMIRPRIMA: tk_print{ $$ = new Nodo("IMPRMIRPRIMA","");
                        $$.agregarHijo("print","PRINT");
}
        |tk_println{ $$ = new Nodo("COMENTARIO","");
                        $$.agregarHijo("Println","PRINTLN");
};

LLAMAMETODO: tk_identificador tk_ParentesisA EXPRESION tk_ParentesisC{ $$ = new Nodo("LLAMAMETODO","");
                                        $$.agregarHijo($1);
                                        $$.agregarHijo(new Nodo("(","PARENTESISA"));
                                        $$.agregarHijo($3);
                                        $$.agregarHijo(new Nodo("(","PARENTESISC"));
                                        };

CONTENIDO:tk_ParentesisA      tk_cadena         tk_ParentesisC{ $$ = new Nodo("CONTENIDO","");
                                        $$.agregarHijo(new Nodo("(","PARENTESISA"));
                                        $$.agregarHijo($2);
                                        $$.agregarHijo(new Nodo("(","PARENTESISC"));
                                        };

CLASE: ACCESO CLAIN tk_id SENTENCIAS{ $$ = new Nodo("CLASE","");
                                        $$.agregarHijo($1);
                                        $$.agregarHijo($2);
                                        $$.agregarHijo($3);
                                        $$.agregarHijo($4);
                                        }
        | ACCESO tk_static tk_void tk_main tk_ParentesisA tk_string tk_CorcheteA tk_CorcheteC tk_args tk_ParentesisC SENTENCIAS{ $$ = new Nodo("CLASE","");
                                        $$.agregarHijo($1);
                                        $$.agregarHijo(new Nodo("static","STATIC"));
                                        $$.agregarHijo(new Nodo("void","VOID"));
                                        $$.agregarHijo(new Nodo("main","MAIN"));
                                        $$.agregarHijo(new Nodo("(","PARENTESISA"));
                                        $$.agregarHijo($6);
                                        $$.agregarHijo(new Nodo("[","CORCHETEA"));
                                        $$.agregarHijo(new Nodo("]","CORCHETEC"));
                                        $$.agregarHijo(new Nodo("args","ARGS"));
                                        $$.agregarHijo(new Nodo("(","PARENTESISC"));
                                        $$.agregarHijo($11);
                                        };

ACCESO: tk_public{ $$ = new Nodo("ACCESO","");
                        $$.agregarHijo("public","PUBLIC");
}
        | tk_private{ $$ = new Nodo("ACCESO","");
                        $$.agregarHijo("private","PRIVATE");
};

CLAIN: tk_class{ $$ = new Nodo("CLAIN","");
                        $$.agregarHijo("class","CLASS");
}
        |tk_interface{ $$ = new Nodo("CLAIN","");
                        $$.agregarHijo("interface","INTERFACE");
};

METODO: tk_public TIPO tk_identificador tk_ParentesisA  DECLARACION tk_ParentesisC SENTENCIAS{ $$ = new Nodo("METODO","");
                                        $$.agregarHijo(new Nodo("public","PUBLIC"));
                                        $$.agregarHijo($2);
                                        $$.agregarHijo($3);
                                        $$.agregarHijo(new Nodo("(","PARENTESISA"));
                                        $$.agregarHijo($5);
                                        $$.agregarHijo(new Nodo("(","PARENTESISC"));
                                        $$.agregarHijo($7);
                                        };

SENTENCIAS: tk_LlaveA   INSTRUCCIONES   tk_LlaveC{ $$ = new Nodo("SENTENCIAS","");
                        $$.agregarHijo("{","LLAVEA");
                        $$.agregarHijo($2);
                        $$.agregarHijo("}","LLAVEC");
};

EXPRESION: EXPRESION tk_diagonal EXPRESION { $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("/","DIAGONAL"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_multiplicacion EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("*","MULTIPLICACION"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_menos EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("-","MENOS"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_mas EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("+","MAS"));
                        $$.agregarHijo($3);
                        }
        | tk_entero{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        }
        | tk_decimal{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        }
        | tk_identificador{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        }
        | tk_float{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        }
        | tk_false{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        }
        | tk_true{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        }
        | EXPRESION tk_dobleIgual EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("==","DOBLEIGUAL"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_diferenteDe EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("!=","DIFERENTEDE"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_menorQue EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("<","MENORQUE"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_mayorQue EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo(">","MAYORQUE"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_menorOigual EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("<=","MENORIGUAL"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_mayorOigual EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo(">=","MAYORIGUAL"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_And EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("&&","AND"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_Or EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("||","OR"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_Potencia EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("^","POTENCIA"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_coma EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo(",","COMA"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_sustraccion EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("--","SUSTRACCION"));
                        $$.agregarHijo($3);
                        }
        | EXPRESION tk_adicion EXPRESION{ $$ = new Nodo("EXPRESION","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo("++","ADICION"));
                        $$.agregarHijo($3);
                        };