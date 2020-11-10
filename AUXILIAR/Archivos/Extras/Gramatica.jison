
/*================================LEXICO=============================*/

/* lexical grammar */
%lex
%options case-insensitive
%%

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

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start S

%% 
S: tk_public tk_class  tk_LlaveA Clase tk_LlaveC EOF;


Clase: tk_public tk_static tk_void tk_main tk_ParentesisA tk_string tk_CorcheteA tk_CorcheteC tk_args tk_ParentesisC tk_LlaveA Instrucciones tk_LlaveC;

Instrucciones: Instrucciones Instruccion
                | Instruccion;
        
Instruccion: Declaracion 
 |   Imprimir    
 |   Asignacion 
 |   If                 
 | error tk_PuntoYComa { 
        console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
    };

Declaracion: Tipo DeclaracionPrima;

DeclaracionPrima:   Variables tk_PuntoYComa;

Variables: Variable     VariablesPrima ;

Variable:       tk_identificador        AsignacionPrima;

VariablesPrima: tk_coma Variables
               | Aux;

Aux: /*epsilon*/;

Asignacion:     tk_identificador        AsignacionA     tk_PuntoYComa;

AsignacionA:    tk_igual        Valor ;

AsignacionPrima: tk_igual  Valor;

Valor:  tk_cadena
        | tk_identificador
        | tk_entero
        | tk_decimal 
        | tk_false
        | tk_true;

Tipo:   tk_int
        | tk_boolean
        | tk_char
        | tk_string
        | tk_float ;

Imprimir: tk_system       tk_Punto        tk_out  tk_Punto        tk_print        tk_ParentesisA  Expresion       tk_ParentesisC tk_PuntoYComa
        |       tk_system       tk_punto        tk_out  tk_punto        tk_println        tk_ParentesisA  Expresion       tk_ParentesisC tk_PuntoYComa;

If:     tk_if   tk_ParentesisA  Condiciones tk_ParentesisC tk_LlaveA Instruccion tk_LlaveC IfPrima ;

Switch: tk_switch       tk_ParentesisA  tk_identificador        tk_ParentesisC  tk_LlaveA  Casos   tk_LlaveC ;

IfPrima:        tk_else tk_LlaveA Instruccion tk_LlaveC
        |/*epsilon*/;

Casos: tk_case tk_entero tk_dosPuntos    Instruccion     tk_break        tk_PuntoYComa Casos
       | tk_default    tk_dosPuntos    Instruccion     tk_break tk_PuntoYComa;
While:  tk_while        tk_ParentesisA  Condiciones tk_ParentesisC tk_LlaveA Instruccion tk_LlaveC ;

For:    tk_for  tk_ParentesisA  Declaracion     Condiciones tk_PuntoYComa Auto tk_ParentesisC tk_LlaveA   Dentro tk_LlaveC
       |tk_for  tk_ParentesisA  Declaracion     Condiciones tk_PuntoYComa Auto tk_ParentesisC  Instruccion;

Auto:   tk_identificador        AutoPrima ;

AutoPrima:      tk_adicion
        |       tk_sustraccion ;

Condiciones:    tk_identificador CondicionesPrima ;


CondicionesPrima:  tk_dobleIgual Valor
        |       tk_mayorQue     Valor
        |       tk_menorQue     Valor
        |       tk_diferenteDe  Valor
        |       tk_mayorOigual  Valor
        |       tk_menorOigual  Valor
        |       tk_igual        Valor
        |       Aux;
