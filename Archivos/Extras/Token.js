var Tipo;
(function (Tipo) {
    Tipo[Tipo["NUMERO_ENTERO"] = 0] = "NUMERO_ENTERO";
    Tipo[Tipo["NUMERO_DECIMAL"] = 1] = "NUMERO_DECIMAL";
    Tipo[Tipo["VARIABLE"] = 2] = "VARIABLE";
    Tipo[Tipo["PALABRA_RESERVADA"] = 3] = "PALABRA_RESERVADA";
    Tipo[Tipo["BREAK"] = 4] = "BREAK";
    Tipo[Tipo["CONTINUE"] = 5] = "CONTINUE";
    Tipo[Tipo["RETURN"] = 6] = "RETURN";
    Tipo[Tipo["AND"] = 7] = "AND";
    Tipo[Tipo["NOT"] = 8] = "NOT";
    Tipo[Tipo["OR"] = 9] = "OR";
    Tipo[Tipo["XOR"] = 10] = "XOR";
    Tipo[Tipo["MAIN"] = 11] = "MAIN";
    Tipo[Tipo["CADENA"] = 12] = "CADENA";
    Tipo[Tipo["ARGS"] = 13] = "ARGS";
    Tipo[Tipo["PUBLIC"] = 14] = "PUBLIC";
    Tipo[Tipo["STATIC"] = 15] = "STATIC";
    Tipo[Tipo["CARACTER"] = 16] = "CARACTER";
    Tipo[Tipo["VOID"] = 17] = "VOID";
    Tipo[Tipo["SYSTEM"] = 18] = "SYSTEM";
    Tipo[Tipo["OUT"] = 19] = "OUT";
    Tipo[Tipo["PRINTLN"] = 20] = "PRINTLN";
    Tipo[Tipo["PRINT"] = 21] = "PRINT";
    Tipo[Tipo["INTERFACE"] = 22] = "INTERFACE";
    Tipo[Tipo["CLASS"] = 23] = "CLASS";
    Tipo[Tipo["FOR"] = 24] = "FOR";
    Tipo[Tipo["IF"] = 25] = "IF";
    Tipo[Tipo["ELSE"] = 26] = "ELSE";
    Tipo[Tipo["WHILE"] = 27] = "WHILE";
    Tipo[Tipo["DO"] = 28] = "DO";
    Tipo[Tipo["INT"] = 29] = "INT";
    Tipo[Tipo["BOOLEAN"] = 30] = "BOOLEAN";
    Tipo[Tipo["FLOAT"] = 31] = "FLOAT";
    Tipo[Tipo["STRING"] = 32] = "STRING";
    Tipo[Tipo["CHAR"] = 33] = "CHAR";
    Tipo[Tipo["COMENTARIO"] = 34] = "COMENTARIO";
    Tipo[Tipo["COMENTARIO_CIERRA"] = 35] = "COMENTARIO_CIERRA";
    Tipo[Tipo["COMENTARIO_LINEA"] = 36] = "COMENTARIO_LINEA";
    Tipo[Tipo["COMENTARIO_ABRE"] = 37] = "COMENTARIO_ABRE";
    Tipo[Tipo["MAS"] = 38] = "MAS";
    Tipo[Tipo["MENOS"] = 39] = "MENOS";
    Tipo[Tipo["ASTERISCO"] = 40] = "ASTERISCO";
    Tipo[Tipo["DIAGONAL"] = 41] = "DIAGONAL";
    Tipo[Tipo["DIAGONAL_INVERTIDA"] = 42] = "DIAGONAL_INVERTIDA";
    Tipo[Tipo["ADICION"] = 43] = "ADICION";
    Tipo[Tipo["SUSTRACCION"] = 44] = "SUSTRACCION";
    Tipo[Tipo["LLAVE_IZQ"] = 45] = "LLAVE_IZQ";
    Tipo[Tipo["LLAVE_DER"] = 46] = "LLAVE_DER";
    Tipo[Tipo["PARENTESIS_IZQ"] = 47] = "PARENTESIS_IZQ";
    Tipo[Tipo["PARENTESIS_DER"] = 48] = "PARENTESIS_DER";
    Tipo[Tipo["CORCHETE_IZQ"] = 49] = "CORCHETE_IZQ";
    Tipo[Tipo["CORCHETE_DER"] = 50] = "CORCHETE_DER";
    Tipo[Tipo["PUNTO_Y_COMA"] = 51] = "PUNTO_Y_COMA";
    Tipo[Tipo["PUNTO"] = 52] = "PUNTO";
    Tipo[Tipo["IGUAL"] = 53] = "IGUAL";
    Tipo[Tipo["IGUAL_IGUAL"] = 54] = "IGUAL_IGUAL";
    Tipo[Tipo["MENOR_QUE"] = 55] = "MENOR_QUE";
    Tipo[Tipo["MAYOR_QUE"] = 56] = "MAYOR_QUE";
    Tipo[Tipo["MENOR_IGUAL"] = 57] = "MENOR_IGUAL";
    Tipo[Tipo["MAYOR_IGUAL"] = 58] = "MAYOR_IGUAL";
    Tipo[Tipo["DISTINTO"] = 59] = "DISTINTO";
})(Tipo || (Tipo = {}));
var Token = /** @class */ (function () {
    function Token(tipoDelToken, val, contador) {
        this.tipoToken = tipoDelToken;
        this.valor = val;
        this.contadorr = contador;
    }
    Object.defineProperty(Token.prototype, "GetVal", {
        get: function () {
            return this.valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "tipoToke", {
        get: function () {
            return this.tipoToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "contador", {
        get: function () {
            return this.contadorr;
        },
        set: function (value) {
            this.contadorr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "ObtenerTipo", {
        get: function () {
            switch (this.tipoToken) {
                case Tipo.NUMERO_ENTERO:
                    return "NUMERO ENTERO";
                case Tipo.NUMERO_DECIMAL:
                    return "NUMERO DECIMAL";
                case Tipo.VARIABLE:
                    return "VARIABLE";
                case Tipo.PALABRA_RESERVADA:
                    return "PALABRA_RESERVADA";
                case Tipo.BREAK:
                    return "BREAK";
                case Tipo.CONTINUE:
                    return "CONTINUE";
                case Tipo.RETURN:
                    return "RETURN";
                case Tipo.AND:
                    return "AND";
                case Tipo.NOT:
                    return "NOT";
                case Tipo.OR:
                    return "OR";
                case Tipo.XOR:
                    return "XOR";
                case Tipo.MAIN:
                    return "MAIN";
                case Tipo.ARGS:
                    return "ARGS";
                case Tipo.PUBLIC:
                    return "PUBLIC";
                case Tipo.STATIC:
                    return "STATIC";
                case Tipo.VOID:
                    return "VOID";
                case Tipo.SYSTEM:
                    return "SYSTEM";
                case Tipo.OUT:
                    return "OUT";
                case Tipo.PRINTLN:
                    return "PRINTLN";
                case Tipo.PRINT:
                    return "PRINT";
                case Tipo.INTERFACE:
                    return "INTERFACE";
                case Tipo.CLASS:
                    return "CLASS";
                case Tipo.FOR:
                    return "FOR";
                case Tipo.IF:
                    return "IF";
                case Tipo.ELSE:
                    return "ELSE";
                case Tipo.WHILE:
                    return "WHILE";
                case Tipo.DO:
                    return "DO";
                case Tipo.INT:
                    return "INT";
                case Tipo.BOOLEAN:
                    return "BOOLEAN";
                case Tipo.FLOAT:
                    return "FLOAT";
                case Tipo.STRING:
                    return "STRING";
                case Tipo.CHAR:
                    return "CHAR";
                case Tipo.COMENTARIO:
                    return "COMENTARIO";
                case Tipo.MAS:
                    return "MAS";
                case Tipo.MENOS:
                    return "MENOS";
                case Tipo.ASTERISCO:
                    return "ASTERISCO";
                case Tipo.DIAGONAL:
                    return "DIAGONAL";
                case Tipo.ADICION:
                    return "DIAGONAL";
                case Tipo.DIAGONAL_INVERTIDA:
                    return "DIAGONAL_INVERTIDA";
                case Tipo.SUSTRACCION:
                    return "SUSTRACCION";
                case Tipo.IGUAL:
                    return "IGUAL";
                case Tipo.IGUAL_IGUAL:
                    return "IGUAL_IGUAL";
                case Tipo.LLAVE_IZQ:
                    return "LLAVE_IZQUIERDA";
                case Tipo.LLAVE_DER:
                    return "LLAVE_DERECHA";
                case Tipo.PARENTESIS_IZQ:
                    return "PARENTESIS_IZQUIERDO";
                case Tipo.PARENTESIS_DER:
                    return "PARENTESIS_DERECHO";
                case Tipo.CORCHETE_IZQ:
                    return "CORCHETE_IZQUIERDA";
                case Tipo.CORCHETE_DER:
                    return "CORCHETE_DERECHO";
                case Tipo.PUNTO_Y_COMA:
                    return "PUNTO_Y_COMA";
                case Tipo.PUNTO:
                    return "PUNTO";
                case Tipo.MENOR_QUE:
                    return "MENOR_QUE";
                case Tipo.MAYOR_QUE:
                    return "MAYOR_QUE";
                case Tipo.MENOR_IGUAL:
                    return "MENOR_IGUAL";
                case Tipo.MAYOR_IGUAL:
                    return "MAYOR_IGUAL";
                case Tipo.DISTINTO:
                    return "DISTINTO";
                case Tipo.CADENA:
                    return "CADENA";
                default:
                    return "DESCONOCIDO";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Token;
}());
var listaToken = new Array();
//var     ListError:Array<ErrorA> = new Array<ErrorA>();
var AnalizadorLexico = /** @class */ (function () {
    function AnalizadorLexico() {
        this.estado = 0;
        this.auxlex = "";
        this.contadorToken = 1;
    }
    AnalizadorLexico.prototype.start = function (cadena) {
        var c;
        for (var index = 0; index < cadena.length - 1; index++) {
            c = cadena.charAt(index);
            switch (this.estado) {
                case 0:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0 >= 97 && c.charCodeAt(0) < 123))) {
                        //PALABRAS
                        this.auxlex += c;
                        this.estado = 1;
                    }
                    else if (c == '_') {
                        //DEFINICION DE VARIABLE POSIBLEMENTE
                        this.auxlex += c;
                        this.estado = 2;
                    }
                    else if (c == '"') {
                        //CADENAS
                    }
                    else if (c == '/') {
                        //POSIBLE COMENTARIO
                        this.auxlex += c;
                        this.estado = 8;
                    }
                    else if (c == '/') {
                        this.auxlex += c;
                        this.estado = 11;
                    }
                    else if (c == '{') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.LLAVE_IZQ);
                    }
                    else if (c == '}') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.LLAVE_DER);
                    }
                    else if (c == '(') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PARENTESIS_IZQ);
                    }
                    else if (c == ')') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PARENTESIS_DER);
                    }
                    else if (c == '[') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.CORCHETE_IZQ);
                    }
                    else if (c == ']') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.CORCHETE_DER);
                    }
                    else if (c == '+' && cadena.charAt(index + 1) != '+') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MAS);
                    }
                    else if (c == '+' && cadena.charAt(index + 1) == '+') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA SEGUIR EL INCREMENTO ++
                    }
                    else if (c == '-' && cadena.charAt(index + 1) != '-') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MENOS);
                    }
                    else if (c == '-' && cadena.charAt(index + 1) == '-') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA SEGUIR EL DECREMENTO --
                    }
                    else if (c == '*') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.ASTERISCO);
                    }
                    else if (c == '=') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.IGUAL);
                    }
                    else if (c == '=' && cadena.charAt(index + 1) == '=') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA SEGUIR CON EL IGUAL IGUAL
                    }
                    else if (c == ';') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PUNTO_Y_COMA);
                    }
                    else if (c == '>' && cadena.charAt(index + 1) != '=') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MAYOR_QUE);
                    }
                    else if (c == '<' && cadena.charAt(index + 1) != '=') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.MENOR_QUE);
                    }
                    else if (c == '!' && cadena.charAt(index + 1) == '=') {
                        this.auxlex += c;
                        //CAMBIAMOS DE ESTADO PARA PODER TENER DIFERENTE QUE!=
                    }
                    else if (c == '.') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.PUNTO);
                    }
                    else {
                        if (c != '\n' && c.charCodeAt(0) != 32 && c.charCodeAt(0) != 9 && c.charCodeAt(0) != 13) {
                            this.auxlex += c;
                            //this.agregarErrores("El simbolo no es parte del sistema","Lexico");
                        }
                    }
                    break;
                case 1:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0 >= 97 && c.charCodeAt(0) < 123))) {
                        this.auxlex += c;
                        this.estado = 1;
                    }
                    else if (c == '_') {
                        this.auxlex += c;
                        this.estado = 2;
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxlex += c;
                        this.estado = 2;
                    }
                    else {
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
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxlex += c;
                        this.estado = 2;
                    }
                    else {
                        this.agregarToken(Tipo.VARIABLE);
                        index--;
                    }
                    break;
                case 3:
                    //ESTADO PARA PODER IDENTIFICAR NUMEROS ENTEROS
                    if ((c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)) {
                        this.auxlex += c;
                        this.estado = 3;
                    }
                    else if (c == '.') {
                        this.auxlex += c;
                        this.estado = 4;
                    }
                    else {
                        this.agregarToken(Tipo.NUMERO_ENTERO);
                        index--;
                    }
                    break;
                case 4:
                    //ESTADO PARA PODER IDENTIFICAR NUMEROS DECIMALES
                    if ((c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)) {
                        this.auxlex += c;
                        this.estado = 5;
                    }
                    else {
                        //AGREGAMOS UN ERROR POR SI NO ES UN NUMERO EL QUE VIENE
                        index--;
                    }
                    break;
                case 5:
                    if ((c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)) {
                        this.auxlex += c;
                        this.estado = 5;
                    }
                    else {
                        this.agregarToken(Tipo.NUMERO_DECIMAL);
                        index--;
                    }
                case 6:
                    if (c == '"') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.CADENA);
                    }
                    else if (c == '\\') {
                        this.auxlex += c;
                        this.estado = 7;
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
                        //this.agregarErrores("Se esperaba un ' no el caracter: " + c, "Sintactico");
                        index--;
                    }
                    break;
                case 11:
                    if (c == '/') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.COMENTARIO_LINEA);
                    }
                    else if (c == '*') {
                        this.auxlex += c;
                        this.agregarToken(Tipo.COMENTARIO_ABRE);
                    }
                    else {
                        this.agregarToken(Tipo.DIAGONAL);
                        index--;
                    }
                    break;
                case 12:
                    if (c != '\n') {
                        this.auxlex += c;
                        this.estado = 12;
                    }
                    else {
                        this.agregarToken(Tipo.CADENA);
                    }
                    break;
                case 13:
                    if (c == '/') {
                        this.agregarToken(Tipo.CADENA);
                        this.auxlex += c;
                        this.agregarToken(Tipo.COMENTARIO_CIERRA);
                    }
                    else {
                        this.auxlex += c;
                        this.estado = 13;
                    }
                    break;
                default:
                    break;
            }
        }
    };
    AnalizadorLexico.prototype.VerificarPalabraReservada = function () {
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
    };
    AnalizadorLexico.prototype.agregarToken = function (TipoTok) {
        listaToken.push(new Token(TipoTok, this.auxlex, this.contadorToken));
        this.auxlex = "";
        this.contadorToken++;
        this.estado = 0;
    };
    return AnalizadorLexico;
}());
