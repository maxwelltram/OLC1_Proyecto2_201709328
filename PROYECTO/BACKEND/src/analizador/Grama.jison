
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
"PUBLIC"             %{  return 'tk_public';  %}
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
%right 'tk_adicion' 'tk_sustraccion' 'tk_Potencia' 'tk_igual'
%left 'tk_coma'
%left 'tk_multiplicacion' 'tk_diagonal'
%right 'tk_menos' 'UNOT'

%start INICIO

%% 

INICIO: INSTRUCCIONES EOF {return $1;};

INSTRUCCIONES:  INSTRUCCIONES INSTRUCCION{$$= `${$1} ${$2}`;}
                |INSTRUCCION { $$= `${$1}`;};
                
INSTRUCCION:DECLARACION tk_PuntoYComa{ $$ = `${$1};\n`;}
        | IMPRIMIR tk_PuntoYComa { $$ = `${$1};\n`;}
        | ASIGNACION tk_PuntoYComa{ $$ = `${$1};\n`;}
        | IF    { $$ = `${$1}\n`; }
        | WHILE { $$ = `${$1}\n`; }
        | FOR   { $$ = `${$1}\n`; }
        | DO    tk_PuntoYComa { $$ = `${$1};\n`;}
        | COMENTARIO    { $$ = `${$1}\n`; }
        | CLASE         { $$ = `${$1}\n`; }
        | METODO        {$$= `${$1}\n`; }
        | LLAMAMETODO  { $$ = `${$1};\n`; }
        | SENT  tk_PuntoYComa  { $$ = `${$1};\n`;}
        | error tk_LlaveC {console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);}
        | error tk_PuntoYComa {console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);};

DECLA: tk_igual EXPRESION {$$ = `= ${$2} `;}
        | tk_coma EXPRESION DECLARACION{$$ = `, ${$2} ${$3}`;}
        | /*epsilon*/{$$ = ``;};
//SENT YA
SENT: tk_break { $$ = 'break'; }
        | tk_continue { $$ = 'continue';}
        | tk_return EXPRESION {$$= `return ${$2}`;};

//DELCARACION YA---------------
DECLARACION: TIPO tk_identificador DECLA    {$$ = `${$1} ${$2}  ${$3}`;}
        |/*epsilon*/ {$$ = ``;};
//TIPO YA
TIPO: tk_int { $$ = 'var';}
        | tk_double{ $$ = 'var';}
        | tk_boolean{ $$ = 'var';}
        | tk_char{ $$ = 'var';}
        | tk_string{ $$ = 'var';}
        | tk_void;

//ASIGNACION YA------------
ASIGNACION: tk_identificador tk_igual EXPRESION
{$$ = ` ${$1} = ${$3} `;};
//IF YA
IF:     tk_if   tk_ParentesisA  EXPRESION       tk_ParentesisC  SENTENCIAS
        {$$ = `if (  ${$3} ) ${$5}`;}
        | tk_if   tk_ParentesisA  EXPRESION       tk_ParentesisC  SENTENCIAS      tk_else SENTENCIAS
        {$$ = `if (  ${$3} )  ${$5} else  ${$6}`;};      
//WHILE YA
WHILE:  tk_while        tk_ParentesisA  EXPRESION       tk_ParentesisC  SENTENCIAS{$$ = `while ( ${$3} ) ${$5}`;};
//FOR YA
FOR: tk_for tk_ParentesisA      DECLARACION   tk_PuntoYComa  EXPRESION   tk_PuntoYComa    EXPRESION     tk_ParentesisC SENTENCIAS
{$$ = `for (  ${$3} ; ${$5} ; ${$7} ) ${$9} `;}
;
//DO YA
DO:     tk_do   SENTENCIAS WHILE
{$$ = `do ${$2} ${$3}`;};
//COMENTARIO YA--------------
COMENTARIO: Tk_comentario{$$ = `${$1}\n`;};
//IMPRIMIR YA--------------
IMPRIMIR: tk_system tk_Punto    tk_out tk_Punto  IMPRIMIRPRIMA   CONTENIDO{$$ = `console.log ${$6}`;};
//IMPRIMIRPRIAM YA---------------
IMPRIMIRPRIMA: tk_print
        |tk_println;
//LLAMAMETODO YA
LLAMAMETODO: tk_identificador tk_ParentesisA EXPRESION tk_ParentesisC{$$ = ` var llamada=  new ${$1} ( ${$3}  )`;};
//CONTENIDO YA----------------
CONTENIDO:tk_ParentesisA      CONTENIDOVARIO         tk_ParentesisC{$$ = `( ${$2} )`;};

CONTENIDOVARIO: tk_cadena CONTENIDOVARIO{ $$ = `${$1}`; }
| tk_identificador CONTENIDOVARIO{ $$ = `${$1}`; }
|/*epsilon*/{$$ = ``;};

CLASE: ACCESO CLAIN tk_identificador SENTENCIAS { $$ = `function ${$3} ${$4}`;}
        | ACCESO tk_static tk_void tk_main tk_ParentesisA tk_string tk_CorcheteA tk_CorcheteC tk_args tk_ParentesisC SENTENCIAS
        { $$ = ` function Main() ${$11}`;};
//ACCESO YA
ACCESO: tk_public 
        | tk_private;
//CLAIN YA
CLAIN: tk_class{ $$= ` ${$1}`;}
        |tk_interface{ $$= ` ${$1}`;};

METODO: ACCESO TIPO tk_identificador tk_ParentesisA  DECLARACION tk_ParentesisC SENTENCIAS
{ $$ = ` functionXXXX ${$3} ( ${$5} ) ${$7} `;};
//SENTENCIAS YA
SENTENCIAS: tk_LlaveA   INSTRUCCIONES   tk_LlaveC{$$ = `{\n ${$2} }\n`;};

EXPRESION: EXPRESION tk_diagonal EXPRESION {$$ = ` ${$1} / ${$3}`;}
        | EXPRESION tk_multiplicacion EXPRESION{$$ = ` ${$1} * ${$3}`;}
        | EXPRESION tk_menos EXPRESION{$$ = ` ${$1} - ${$3}`;}
        | EXPRESION tk_mas EXPRESION{$$ = ` ${$1} + ${$3}`;}
        | tk_cadena{ $$ = `${$1}`; }
        | tk_entero{ $$ = `${$1}`; }
        | tk_decimal{ $$ = `${$1}`; }
        | tk_identificador{ $$ = `${$1}`; }
        | tk_float{ $$ = `${$1}`; }
        | tk_false{ $$ = `${$1}`; }
        | tk_true{ $$ = `${$1}`; }
        | tk_coma EXPRESION {$$ = `,${$2}`;}
        | EXPRESION tk_dobleIgual EXPRESION{$$ = ` ${$1} == ${$3}`;}
        | EXPRESION tk_diferenteDe EXPRESION{$$ = ` ${$1} != ${$3}`;}
        | EXPRESION tk_menorQue EXPRESION{$$ = ` ${$1} < ${$3}`;}
        | EXPRESION tk_mayorQue EXPRESION{$$ = ` ${$1} > ${$3}`;}
        | EXPRESION tk_menorOigual EXPRESION{$$ = ` ${$1} <= ${$3}`;}
        | EXPRESION tk_mayorOigual EXPRESION{$$ = ` ${$1} >= ${$3}`;}
        | EXPRESION tk_And EXPRESION{$$ = ` ${$1} && ${$3}`;}
        | EXPRESION tk_Or EXPRESION{$$ = ` ${$1} || ${$3}`;}
        | EXPRESION tk_Potencia EXPRESION{$$ = ` ${$1} ^ ${$3}`;}
        | EXPRESION tk_coma EXPRESION{$$ = ` ${$1} , ${$3}`;}
        | EXPRESION tk_igual EXPRESION {$$ = ` ${$1} = ${$3}`;}
        | EXPRESION tk_sustraccion {$$ = ` ${$1} -- `;}
        | EXPRESION tk_adicion {$$ = ` ${$1} ++ `;}
        | tk_ParentesisA  EXPRESION tk_ParentesisC {$$ = `(${$2} ) `;};