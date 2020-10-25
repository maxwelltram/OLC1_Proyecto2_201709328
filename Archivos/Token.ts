enum Tipo {
    NUMERO_ENTERO,
    NUMERO_DECIMAL,
    VARIABLE,
    PALABRA_RESERVADA,
    BREAK,
    CONTINUE,
    RETURN,
    AND,
    NOT,
    OR,
    XOR,
    MAIN,
    CADENA,
    ARGS,
    PUBLIC,
    STATIC,
    CARACTER,
    VOID,
    SYSTEM,
    OUT,
    PRINTLN,
    PRINT,
    INTERFACE,
    CLASS,
    FOR,
    IF,
    ELSE,
    WHILE,
    DO,
    INT,
    BOOLEAN,
    FLOAT,
    STRING,
    CHAR,
    COMENTARIO,
    COMENTARIO_CIERRA,
    COMENTARIO_LINEA,
    COMENTARIO_ABRE,
    MAS,
    MENOS,
    ASTERISCO,
    DIAGONAL,
    DIAGONAL_INVERTIDA,
    ADICION,
    SUSTRACCION,
    LLAVE_IZQ,
    LLAVE_DER,
    PARENTESIS_IZQ,
    PARENTESIS_DER,
    CORCHETE_IZQ,
    CORCHETE_DER,
    PUNTO_Y_COMA,
    PUNTO,
    IGUAL,
    IGUAL_IGUAL,
    MENOR_QUE,
    MAYOR_QUE,
    MENOR_IGUAL,
    MAYOR_IGUAL,
    DISTINTO

}

class Token {
    private tipoToken: Tipo;
    private valor: string;
    private contadorr: number;

    public get GetVal(): string {
        return this.valor;
    }
    public get tipoToke(): Tipo {
        return this.tipoToken;
    }

    public get contador(): number {
        return this.contadorr;
    }

    public set contador(value: number) {
        this.contadorr = value;
    }

    public get ObtenerTipo(): string {
        switch (this.tipoToken) {
            case Tipo.NUMERO_ENTERO:
                return "NUMERO ENTERO";
            case Tipo.NUMERO_DECIMAL:
                return "NUMERO DECIMAL"
            case Tipo.VARIABLE:
                return "VARIABLE"
            case Tipo.PALABRA_RESERVADA:
                return "PALABRA_RESERVADA"
            case Tipo.BREAK:
                return "BREAK"
            case Tipo.CONTINUE:
                return "CONTINUE"
            case Tipo.RETURN:
                return "RETURN"
            case Tipo.AND:
                return "AND"
            case Tipo.NOT:
                return "NOT"
            case Tipo.OR:
                return "OR"
            case Tipo.XOR:
                return "XOR"
            case Tipo.MAIN:
                return "MAIN"
            case Tipo.ARGS:
                return "ARGS"
            case Tipo.PUBLIC:
                return "PUBLIC"
            case Tipo.STATIC:
                return "STATIC"
            case Tipo.VOID:
                return "VOID"
            case Tipo.SYSTEM:
                return "SYSTEM"
            case Tipo.OUT:
                return "OUT"
            case Tipo.PRINTLN:
                return "PRINTLN"
            case Tipo.PRINT:
                return "PRINT"
            case Tipo.INTERFACE:
                return "INTERFACE"
            case Tipo.CLASS:
                return "CLASS"
            case Tipo.FOR:
                return "FOR"
            case Tipo.IF:
                return "IF"
            case Tipo.ELSE:
                return "ELSE"
            case Tipo.WHILE:
                return "WHILE"
            case Tipo.DO:
                return "DO"
            case Tipo.INT:
                return "INT"
            case Tipo.BOOLEAN:
                return "BOOLEAN"
            case Tipo.FLOAT:
                return "FLOAT"
            case Tipo.STRING:
                return "STRING"
            case Tipo.CHAR:
                return "CHAR"
            case Tipo.COMENTARIO:
                return "COMENTARIO"
            case Tipo.MAS:
                return "MAS"
            case Tipo.MENOS:
                return "MENOS"
            case Tipo.ASTERISCO:
                return "ASTERISCO"
            case Tipo.DIAGONAL:
                return "DIAGONAL"
            case Tipo.ADICION:
                return "DIAGONAL"
            case Tipo.DIAGONAL_INVERTIDA:
                return "DIAGONAL_INVERTIDA"
            case Tipo.SUSTRACCION:
                return "SUSTRACCION"
            case Tipo.IGUAL:
                return "IGUAL"
            case Tipo.IGUAL_IGUAL:
                return "IGUAL_IGUAL"
            case Tipo.LLAVE_IZQ:
                return "LLAVE_IZQUIERDA"
            case Tipo.LLAVE_DER:
                return "LLAVE_DERECHA"
            case Tipo.PARENTESIS_IZQ:
                return "PARENTESIS_IZQUIERDO"
            case Tipo.PARENTESIS_DER:
                return "PARENTESIS_DERECHO"
            case Tipo.CORCHETE_IZQ:
                return "CORCHETE_IZQUIERDA"
            case Tipo.CORCHETE_DER:
                return "CORCHETE_DERECHO"
            case Tipo.PUNTO_Y_COMA:
                return "PUNTO_Y_COMA"
            case Tipo.PUNTO:
                return "PUNTO"
            case Tipo.MENOR_QUE:
                return "MENOR_QUE"
            case Tipo.MAYOR_QUE:
                return "MAYOR_QUE"
            case Tipo.MENOR_IGUAL:
                return "MENOR_IGUAL"
            case Tipo.MAYOR_IGUAL:
                return "MAYOR_IGUAL"
            case Tipo.DISTINTO:
                return "DISTINTO"
            case Tipo.CADENA:
                return "CADENA"
            default:
                return "DESCONOCIDO";
        }
    }
    constructor(tipoDelToken: Tipo, val: string, contador: number) {
        this.tipoToken = tipoDelToken;
        this.valor = val;
        this.contadorr = contador;
    }
}



var listaToken: Array<Token> = new Array<Token>();
//var     ListError:Array<ErrorA> = new Array<ErrorA>();
class AnalizadorLexico {

    estado = 0; auxlex = ""; contadorToken = 1;


    start(cadena: String) {
        var c;

        for (let index = 0; index < cadena.length - 1; index++) {
            c = cadena.charAt(index);
            switch (this.estado) {
                case 0:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0 >= 97 && c.charCodeAt(0) < 123))) {
                        //PALABRAS
                        this.auxlex += c; this.estado = 1;
                    } else if (c == '_') {
                        //DEFINICION DE VARIABLE POSIBLEMENTE
                        this.auxlex += c;
                        this.estado = 2;
                    } else if (c == '"') {
                        //CADENAS
                    } else if (c == '/') {
                        //POSIBLE COMENTARIO
                        this.auxlex +=c;
                        this.estado =8;
                    }else if (c =='/'){
                        this.auxlex +=c;
                        this.estado =11;
                    } else if (c == '{') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.LLAVE_IZQ);
                    } else if (c == '}') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.LLAVE_DER);
                    } else if (c == '(') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PARENTESIS_IZQ);
                    } else if (c == ')') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PARENTESIS_DER);
                    } else if (c == '[') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.CORCHETE_IZQ);
                    } else if (c == ']') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.CORCHETE_DER);
                    } else if (c == '+' && cadena.charAt(index + 1) != '+') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MAS);
                    } else if (c == '+' && cadena.charAt(index + 1) == '+') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA SEGUIR EL INCREMENTO ++
                    } else if (c == '-' && cadena.charAt(index + 1) != '-') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MENOS);
                    } else if (c == '-' && cadena.charAt(index + 1) == '-') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA SEGUIR EL DECREMENTO --
                    } else if (c == '*') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.ASTERISCO);
                    } else if (c == '=') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.IGUAL);
                    } else if (c == '=' && cadena.charAt(index + 1) == '=') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA SEGUIR CON EL IGUAL IGUAL
                    } else if (c == ';') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PUNTO_Y_COMA);
                    } else if (c == '>' && cadena.charAt(index + 1) != '=') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MAYOR_QUE);
                    } else if (c == '<' && cadena.charAt(index + 1) != '=') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MENOR_QUE);
                    } else if (c == '!' && cadena.charAt(index + 1) == '=') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA PODER TENER DIFERENTE QUE!=
                    } else if (c == '.') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PUNTO);
                    } else {
                        if (c != '\n' && c.charCodeAt(0) != 32 && c.charCodeAt(0) != 9 && c.charCodeAt(0) != 13) {
                            this.auxlex += c;
                            //this.agregarErrores("El simbolo no es parte del sistema","Lexico");
                        }
                    }
                    break;
                case 1:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0 >= 97 && c.charCodeAt(0) < 123))) {
                        this.auxlex += c; this.estado = 1;
                    } else if (c == '_') {
                        this.auxlex += c;
                        this.estado = 2;
                    } else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxlex += c;
                        this.estado = 2;
                    } else {
                        //VERIFICA LA PALABRA RESERVADA
                        this.VerificarPalabraReservada();
                        index--;
                    }
                    break;
                case 2:
                    //ESTADO PARA IDENTIFICAR VARIABLES
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) {
                        this.auxlex += c;
                        this.estado = 2;
                    } else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxlex += c;
                        this.estado = 2;
                    } else {
                        this.agregarToken(Tipo.VARIABLE);
                        index--;
                    }
                    break;
                case 3:
                    //ESTADO PARA PODER IDENTIFICAR NUMEROS ENTEROS
                    if ((c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)) {
                        this.auxlex += c;
                        this.estado = 3;
                    } else if (c == '.') {
                        this.auxlex += c;
                        this.estado = 4;
                    } else {
                        this.agregarToken(Tipo.NUMERO_ENTERO);
                        index--;
                    }
                    break;
                case 4:
                    //ESTADO PARA PODER IDENTIFICAR NUMEROS DECIMALES
                    if ((c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)) {
                        this.auxlex += c;
                        this.estado = 5;
                    } else {
                        //AGREGAMOS UN ERROR POR SI NO ES UN NUMERO EL QUE VIENE
                        index--;
                    }
                    break;
                case 5:
                    if ((c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)) {
                        this.auxlex += c;
                        this.estado = 5;
                    } else {
                        this.agregarToken(Tipo.NUMERO_DECIMAL);
                        index--;
                    }
                case 6:
                    if (c == '"') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.CADENA)
                    } else if (c == '\\') {
                        this.auxlex += c;
                        this.estado = 7;
                    } else {
                        this.auxlex += c;
                    }
                    break;
                case 7:
                    this.auxlex += c;
                    this.estado = 6;
                    break;
                case 8:
                    if (c == '\\') {
                        this.auxlex += c;
                        this.estado = 9;
                    } else {
                        this.auxlex += c;
                        this.estado = 10;
                    }
                    break;
                case 9:
                    this.auxlex += c;
                    this.estado = 10;
                    break;
                case 10:
                    if (c == '\'') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.CARACTER);
                    } else {
                        //this.agregarErrores("Se esperaba un ' no el caracter: " + c, "Sintactico");
                        index--;
                    }
                    break;
                case 11:
                    if (c=='/'){
                        this.auxlex +=c;
                        this.agregarToken(Tipo.COMENTARIO_LINEA);
                    }else if (c=='*'){
                        this.auxlex +=c;
                        this.agregarToken(Tipo.COMENTARIO_ABRE);
                    }else{
                        this.agregarToken(Tipo.DIAGONAL);
                        index--;
                    }
                    break;
                case 12:
                    if (c!='\n'){
                        this.auxlex +=c;
                        this.estado =12;
                    }else{
                        this.agregarToken(Tipo.CADENA)
                    }
                    break;
                case 13:
                    if (c=='/'){
                        this.agregarToken(Tipo.CADENA);
                        this.auxlex+=c;
                        this.agregarToken(Tipo.COMENTARIO_CIERRA);
                    }else{
                        this.auxlex+=c;
                        this.estado=13;
                    }
                    break;
                default:

                    break;
            }
        }

    }

    VerificarPalabraReservada() {
        switch (this.auxlex) {
            case "break":
                this.agregarToken(Tipo.BREAK);
                break;
            case "continue":
                this.agregarToken(Tipo.CONTINUE);
                break;
            case "return":
                this.agregarToken(Tipo.RETURN);
                break;
            case "main":
                this.agregarToken(Tipo.MAIN);
                break;
            case "ARGS":
                this.agregarToken(Tipo.ARGS);
                break;
            case "public":
                this.agregarToken(Tipo.PUBLIC);
                break;
            case "static":
                this.agregarToken(Tipo.STATIC);
                break;
            case "void":
                this.agregarToken(Tipo.VOID);
                break;
            case "system":
                this.agregarToken(Tipo.SYSTEM);
                break;
            case "out":
                this.agregarToken(Tipo.OUT);
                break;
            case "println":
                this.agregarToken(Tipo.PRINTLN);
                break;
            case "print":
                this.agregarToken(Tipo.PRINT);
                break;
            case "interface":
                this.agregarToken(Tipo.INTERFACE);
                break;
            case "class":
                this.agregarToken(Tipo.CLASS);
                break;
            case "for":
                this.agregarToken(Tipo.FOR);
                break;
            case "if":
                this.agregarToken(Tipo.IF);
                break;
            case "else":
                this.agregarToken(Tipo.ELSE);
                break;
            case "while":
                this.agregarToken(Tipo.WHILE);
                break;
            case "do":
                this.agregarToken(Tipo.DO);
                break;
            case "int":
                this.agregarToken(Tipo.INT);
                break;
            case "boolean":
                this.agregarToken(Tipo.BOOLEAN);
                break;
            case "float":
                this.agregarToken(Tipo.FLOAT);
                break;
            case "string":
                this.agregarToken(Tipo.STRING);
                break;
            case "char":
                this.agregarToken(Tipo.CHAR);
                break;
            default:
                this.agregarToken(Tipo.VARIABLE);
                break;
        }
    }



    agregarToken(TipoTok: Tipo) {
        listaToken.push(new Token(TipoTok, this.auxlex, this.contadorToken));
        this.auxlex = "";
        this.contadorToken++;
        this.estado = 0;
    }

}