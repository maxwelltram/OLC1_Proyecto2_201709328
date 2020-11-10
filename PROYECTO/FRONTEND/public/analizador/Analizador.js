class Token {
    constructor(tipoTk, valor, fila, columna, contador) {
        this.Fila = fila;
        this.Columna = columna;
        this.Contador = contador;
        this.Valor = valor;
        this.Tipo_tk = tipoTk;
    }
    //GET Y SET PARA FILA
    get fila() {
        return this.Fila;
    }
    set fila(value) {
        this.Fila = value;
    }
    //GET Y SET PARA COLUMNA
    get columna() {
        return this.Columna;
    }
    set columna(value) {
        this.Columna = value;
    }
    //GET Y SET PARA VALOR
    get valor() {
        return this.Valor;
    }
    set valor(value) {
        this.Valor = value;
    }
    //GET Y SET PARA CONTADOR
    get contador() {
        return this.Contador;
    }
    set contador(value) {
        this.Contador = value;
    }
    get tipoTk() {
        return this.Tipo_tk;
    }
    set tipoTk(value) {
        this.Tipo_tk = value;
    }
    get tipoToken() {
        switch (this.tipoTk) {
            case TipoToken.VARIABLE:
                return "VARIABLE";
            case TipoToken.CADENA:
                return "CADENA";
            case TipoToken.ENTERO:
                return "ENTERO";
            case TipoToken.DECIMAL:
                return "DECIMAL";
            case TipoToken.DOS_PUNTOS:
                return "DOS_PUNTOS";
            case TipoToken.CHAR:
                return "CHAR";
            case TipoToken.LLAVE_A:
                return "LLAVEA";
            case TipoToken.LLAVE_C:
                return "LLAVEC";
            case TipoToken.PUNTOYCOMA:
                return "PUNTOYCOMA";
            case TipoToken.COMILLAS:
                return "COMILLAS";
            case TipoToken.PARENTESISA:
                return "PARENTESISA";
            case TipoToken.PARENTESISC:
                return "PARENTESISC";
            case TipoToken.COMA:
                return "COMA";
            case TipoToken.CORCHETEA:
                return "CORCHETEA";
            case TipoToken.CORCHETEC:
                return "CORCHETEC";
            case TipoToken.IGUAL:
                return "IGUAL";
            case TipoToken.PUNTO:
                return "PUNTO";
            case TipoToken.COMENTARIO:
                return "COMENTARIO";
            case TipoToken.SUMA:
                return "SUMA";
            case TipoToken.RESTA:
                return "RESTA";
            case TipoToken.DIVISION:
                return "DIVISION";
            case TipoToken.MULTIPLICACION:
                return "MULTIPLICACION";
            case TipoToken.DOBLE_IGUAL:
                return "DOBLE_IGUAL";
            case TipoToken.MENOR_QUE:
                return "MENOR_QUE";
            case TipoToken.MAYOR_QUE:
                return "MAYOR_QUE";
            case TipoToken.EXCLAMACION:
                return "EXCLAMACION";
            case TipoToken.INT:
                return "INT";
            case TipoToken.FLOAT:
                return "FLOAT";
            case TipoToken.STRING:
                return "STRING";
            case TipoToken.BOOLEAN:
                return "BOOLEAN";
            case TipoToken.CLASS:
                return "CLASS";
            case TipoToken.STATIC:
                return "STATIC";
            case TipoToken.VOID:
                return "VOID";
            case TipoToken.MAIN:
                return "MAIN";
            case TipoToken.ARGS:
                return "ARGS";
            case TipoToken.INTERFACE:
                return "INTERFACE";
            case TipoToken.SYSTEM:
                return "SYSTEM";
            case TipoToken.OUT:
                return "OUT";
            case TipoToken.PRINT:
                return "PRINT";
            case TipoToken.PRINTLN:
                return "PRINTLN";
            case TipoToken.IF:
                return "IF";
            case TipoToken.ELSE:
                return "ELSE";
            case TipoToken.FOR:
                return "FOR";
            case TipoToken.WHILE:
                return "WHILE";
            case TipoToken.DO:
                return "DO";
            case TipoToken.FALSE:
                return "FALSE";
            case TipoToken.TRUE:
                return "TRUE";
            case TipoToken.BREAK:
                return "BREAK";
            case TipoToken.CONTINUE:
                return "CONTINUE";
            case TipoToken.AND:
                return "AND";
            case TipoToken.OR:
                return "OR";
            case TipoToken.DIFERENTE_DE:
                return "DIFERENTE_DE";
            case TipoToken.XOR:
                return "XOR";
            default:
                return "";
        }
    }
}
var TipoToken;
(function (TipoToken) {
    TipoToken[TipoToken["PALABRA_RESERVADA"] = 0] = "PALABRA_RESERVADA";
    TipoToken[TipoToken["DESCONOCIDO"] = 1] = "DESCONOCIDO";
    TipoToken[TipoToken["VARIABLE"] = 2] = "VARIABLE";
    TipoToken[TipoToken["DOUBLE"] = 3] = "DOUBLE";
    TipoToken[TipoToken["CADENA"] = 4] = "CADENA";
    TipoToken[TipoToken["RETURN"] = 5] = "RETURN";
    TipoToken[TipoToken["ENTERO"] = 6] = "ENTERO";
    TipoToken[TipoToken["DECIMAL"] = 7] = "DECIMAL";
    TipoToken[TipoToken["DOS_PUNTOS"] = 8] = "DOS_PUNTOS";
    TipoToken[TipoToken["CHAR"] = 9] = "CHAR";
    TipoToken[TipoToken["LLAVE_A"] = 10] = "LLAVE_A";
    TipoToken[TipoToken["LLAVE_C"] = 11] = "LLAVE_C";
    TipoToken[TipoToken["PUNTOYCOMA"] = 12] = "PUNTOYCOMA";
    TipoToken[TipoToken["COMILLAS"] = 13] = "COMILLAS";
    TipoToken[TipoToken["PARENTESISA"] = 14] = "PARENTESISA";
    TipoToken[TipoToken["PARENTESISC"] = 15] = "PARENTESISC";
    TipoToken[TipoToken["COMA"] = 16] = "COMA";
    TipoToken[TipoToken["COMENTARIO_INICIA"] = 17] = "COMENTARIO_INICIA";
    TipoToken[TipoToken["COMENTARIO_TERMINA"] = 18] = "COMENTARIO_TERMINA";
    TipoToken[TipoToken["CORCHETEA"] = 19] = "CORCHETEA";
    TipoToken[TipoToken["CORCHETEC"] = 20] = "CORCHETEC";
    TipoToken[TipoToken["IGUAL"] = 21] = "IGUAL";
    TipoToken[TipoToken["PUNTO"] = 22] = "PUNTO";
    TipoToken[TipoToken["COMENTARIO"] = 23] = "COMENTARIO";
    TipoToken[TipoToken["SUMA"] = 24] = "SUMA";
    TipoToken[TipoToken["RESTA"] = 25] = "RESTA";
    TipoToken[TipoToken["DIVISION"] = 26] = "DIVISION";
    TipoToken[TipoToken["MULTIPLICACION"] = 27] = "MULTIPLICACION";
    TipoToken[TipoToken["DOBLE_IGUAL"] = 28] = "DOBLE_IGUAL";
    TipoToken[TipoToken["MENOR_QUE"] = 29] = "MENOR_QUE";
    TipoToken[TipoToken["MAYOR_QUE"] = 30] = "MAYOR_QUE";
    TipoToken[TipoToken["EXCLAMACION"] = 31] = "EXCLAMACION";
    TipoToken[TipoToken["INT"] = 32] = "INT";
    TipoToken[TipoToken["FLOAT"] = 33] = "FLOAT";
    TipoToken[TipoToken["STRING"] = 34] = "STRING";
    TipoToken[TipoToken["BOOLEAN"] = 35] = "BOOLEAN";
    TipoToken[TipoToken["CLASS"] = 36] = "CLASS";
    TipoToken[TipoToken["STATIC"] = 37] = "STATIC";
    TipoToken[TipoToken["VOID"] = 38] = "VOID";
    TipoToken[TipoToken["MAIN"] = 39] = "MAIN";
    TipoToken[TipoToken["ARGS"] = 40] = "ARGS";
    TipoToken[TipoToken["INTERFACE"] = 41] = "INTERFACE";
    TipoToken[TipoToken["SYSTEM"] = 42] = "SYSTEM";
    TipoToken[TipoToken["OUT"] = 43] = "OUT";
    TipoToken[TipoToken["PRINT"] = 44] = "PRINT";
    TipoToken[TipoToken["PRINTLN"] = 45] = "PRINTLN";
    TipoToken[TipoToken["IF"] = 46] = "IF";
    TipoToken[TipoToken["ELSE"] = 47] = "ELSE";
    TipoToken[TipoToken["FOR"] = 48] = "FOR";
    TipoToken[TipoToken["WHILE"] = 49] = "WHILE";
    TipoToken[TipoToken["DO"] = 50] = "DO";
    TipoToken[TipoToken["FALSE"] = 51] = "FALSE";
    TipoToken[TipoToken["TRUE"] = 52] = "TRUE";
    TipoToken[TipoToken["BREAK"] = 53] = "BREAK";
    TipoToken[TipoToken["CONTINUE"] = 54] = "CONTINUE";
    TipoToken[TipoToken["AND"] = 55] = "AND";
    TipoToken[TipoToken["OR"] = 56] = "OR";
    TipoToken[TipoToken["CARACTER"] = 57] = "CARACTER";
    TipoToken[TipoToken["DIFERENTE_DE"] = 58] = "DIFERENTE_DE";
    TipoToken[TipoToken["XOR"] = 59] = "XOR";
    TipoToken[TipoToken["PUBLIC"] = 60] = "PUBLIC";
    TipoToken[TipoToken["PRIVATE"] = 61] = "PRIVATE";
})(TipoToken || (TipoToken = {}));
class ErrorAna {
    constructor(valor, contadorE, fila, columna, descripcion, tipo) {
        this.ValorE = valor;
        this.ContadorE = contadorE;
        this.FilaE = fila;
        this.ColumnaE = columna;
        this.DescripcionE = descripcion;
        this.TipoE = tipo;
    }
    get valor() {
        return this.ValorE;
    }
    set valor(value) {
        this.ValorE = value;
    }
    get contadorE() {
        return this.ContadorE;
    }
    set contadorE(value) {
        this.ContadorE = value;
    }
    get fila() {
        return this.FilaE;
    }
    set fila(value) {
        this.FilaE = value;
    }
    get columna() {
        return this.ColumnaE;
    }
    set columna(value) {
        this.ColumnaE = value;
    }
    get descripcion() {
        return this.DescripcionE;
    }
    set descripcion(value) {
        this.DescripcionE = value;
    }
    get tipo() {
        return this.TipoE;
    }
    set tipo(value) {
        this.TipoE = value;
    }
}
var listaToken = new Array();
var ListError = new Array();
class AnalizadorLéxico {
    constructor() {
        this.listaToken = new Array();
        this.fila = 1;
        this.columna = 0;
        this.estado = 0;
        this.contadorToken = 1;
        this.contadorE = 1;
        this.columnaT = 0;
        this.comprueba = true;
        this.auxiliar = "";
    }
    start(cadena) {
        ListError = new Array();
        var c;
        for (let index = 0; index < cadena.length; index++) {
            c = cadena.charAt(index);
            if (c == '\n') {
                this.fila++;
                this.columna = 0;
            }
            else {
                this.columna++;
            }
            if (c != '\n' && c != ' ' && this.comprueba) {
                this.columnaT = this.columna;
                this.comprueba = false;
            }
            switch (this.estado) {
                case 0:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) {
                        this.auxiliar += c;
                        this.estado = 1;
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 3;
                    }
                    else if (c == '"') {
                        this.auxiliar += c;
                        this.estado = 6;
                    }
                    else if (c == '\'') {
                        this.auxiliar += c;
                        this.estado = 8;
                    }
                    else if (c == '/') {
                        this.auxiliar += c;
                        this.estado = 11;
                    }
                    else if (c == '{') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.LLAVE_A);
                    }
                    else if (c == '}') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.LLAVE_C);
                    }
                    else if (c == '(') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PARENTESISA);
                    }
                    else if (c == ')') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PARENTESISC);
                    }
                    else if (c == '[') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CORCHETEA);
                    }
                    else if (c == ']') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CORCHETEC);
                    }
                    else if (c == '+') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.SUMA);
                    }
                    else if (c == '-') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.RESTA);
                    }
                    else if (c == '*') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.MULTIPLICACION);
                    }
                    else if (c == '=') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.IGUAL);
                    }
                    else if (c == ':') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.DOS_PUNTOS);
                    }
                    else if (c == ';') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PUNTOYCOMA);
                    }
                    else if (c == '>') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.MAYOR_QUE);
                    }
                    else if (c == '<') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.MENOR_QUE);
                    }
                    else if (c == '!') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.EXCLAMACION);
                    }
                    else if (c == ',') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMA);
                    }
                    else if (c == '.') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.PUNTO);
                    }
                    else if (c == '&') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.AND);
                    }
                    else if (c == '|') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.OR);
                    }
                    else if (c == '^') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.XOR);
                    }
                    else {
                        if (c != '\n' && c.charCodeAt(0) != 32 && c.charCodeAt(0) != 9 && c.charCodeAt(0) != 13) {
                            this.auxiliar += c;
                            console.log("ACA ESTA " + c);
                            this.agregarError("El simbolo no es parte del sistema aca" + c, " ERROR LEXICO");
                        }
                        else {
                            this.agregarError("El simbolo no es parte del sistema aca" + c, " ERROR LEXICO");
                        }
                    }
                    break;
                case 1:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) {
                        this.auxiliar += c;
                        this.estado = 1;
                    }
                    else if (c == '_') {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else {
                        this.verificarPR();
                        index--;
                        this.columna--;
                    }
                    break;
                case 2:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else if (c == '_') {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 2;
                    }
                    else {
                        this.agregarTk(TipoToken.VARIABLE);
                        index--;
                        this.columna--;
                    }
                    break;
                case 3:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 3;
                    }
                    else if (c == '.') {
                        this.auxiliar += c;
                        this.estado = 4;
                    }
                    else {
                        this.agregarTk(TipoToken.ENTERO);
                        index--;
                        this.columna--;
                    }
                    break;
                case 4:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 5;
                    }
                    else {
                        this.agregarError("Se esperaba un numero despues del punto no:" + c, "Tipo Sintactico");
                        index--;
                        this.columna--;
                    }
                    break;
                case 5:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
                        this.auxiliar += c;
                        this.estado = 5;
                    }
                    else {
                        this.agregarTk(TipoToken.DECIMAL);
                        index--;
                        this.columna--;
                    }
                    break;
                case 6:
                    if (c == '"') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CADENA);
                    }
                    else if (c == '\\') {
                        this.auxiliar += c;
                        this.estado = 7;
                    }
                    else {
                        this.auxiliar += c;
                    }
                    break;
                case 7:
                    this.auxiliar += c;
                    this.estado = 6;
                    break;
                case 8:
                    if (c == '\\') {
                        this.auxiliar += c;
                        this.estado = 9;
                    }
                    else {
                        this.auxiliar += c;
                        this.estado = 10;
                    }
                    break;
                case 9:
                    this.auxiliar += c;
                    this.estado = 10;
                    break;
                case 10:
                    if (c == '\'') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.CARACTER);
                    }
                    else {
                        this.agregarError("Se esperaba un ' no el caracter: " + c, "Sintactico");
                        index--;
                        this.columna--;
                    }
                    break;
                case 11:
                    if (c == '/') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMENTARIO);
                        this.estado = 12;
                    }
                    else if (c == '*') {
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMENTARIO_INICIA);
                        this.estado = 13;
                    }
                    else {
                        this.agregarTk(TipoToken.DIVISION);
                        index--;
                        this.columna--;
                    }
                    break;
                case 12:
                    if (c != '\n') {
                        this.auxiliar += c;
                        this.estado = 12;
                    }
                    else {
                        this.agregarTk(TipoToken.CADENA);
                    }
                    break;
                case 13:
                    if (c == '*') {
                        this.auxiliar += c;
                        this.estado = 14;
                    }
                    else {
                        this.auxiliar += c;
                        this.estado = 13;
                    }
                    break;
                case 14:
                    if (c == '/') {
                        this.agregarTk(TipoToken.CADENA);
                        this.auxiliar += c;
                        this.agregarTk(TipoToken.COMENTARIO_TERMINA);
                    }
                    else {
                        this.auxiliar += c;
                        this.estado = 13;
                    }
                    break;
                default:
                    break;
            }
        }
        let AnaSinta = new AnalizadorSintactico();
        AnaSinta.analisis();
    }
    verificarPR() {
        switch (this.auxiliar) {
            case "int":
                this.agregarTk(TipoToken.INT);
                break;
            case "float":
                this.agregarTk(TipoToken.FLOAT);
                break;
            case "char":
                this.agregarTk(TipoToken.CHAR);
                break;
            case "double":
                this.agregarTk(TipoToken.DOUBLE);
                break;
            case "String":
                this.agregarTk(TipoToken.STRING);
                break;
            case "boolean":
                this.agregarTk(TipoToken.BOOLEAN);
                break;
            case "class":
                this.agregarTk(TipoToken.CLASS);
                break;
            case "static":
                this.agregarTk(TipoToken.STATIC);
                break;
            case "void":
                this.agregarTk(TipoToken.VOID);
                break;
            case "main":
                this.agregarTk(TipoToken.MAIN);
                break;
            case "args":
                this.agregarTk(TipoToken.ARGS);
                break;
            case "return":
                this.agregarTk(TipoToken.RETURN);
            case "System":
                this.agregarTk(TipoToken.SYSTEM);
                break;
            case "out":
                this.agregarTk(TipoToken.OUT);
                break;
            case "print":
                this.agregarTk(TipoToken.PRINT);
                break;
            case "println":
                this.agregarTk(TipoToken.PRINTLN);
                break;
            case "if":
                this.agregarTk(TipoToken.IF);
                break;
            case "else":
                this.agregarTk(TipoToken.ELSE);
                break;
            case "break":
                this.agregarTk(TipoToken.BREAK);
                break;
            case "for":
                this.agregarTk(TipoToken.FOR);
                break;
            case "while":
                this.agregarTk(TipoToken.WHILE);
                break;
            case "do":
                this.agregarTk(TipoToken.DO);
            case "false":
                this.agregarTk(TipoToken.FALSE);
                break;
            case "true":
                this.agregarTk(TipoToken.TRUE);
                break;
            case "public":
                this.agregarTk(TipoToken.PUBLIC);
                break;
            case "private":
                this.agregarTk(TipoToken.PRIVATE);
                break;
            default:
                this.agregarTk(TipoToken.VARIABLE);
                break;
        }
    }
    agregarTk(tipoToken) {
        listaToken.push(new Token(tipoToken, this.auxiliar, this.fila, this.columnaT, this.contadorToken));
        this.auxiliar = "";
        this.contadorToken++;
        this.comprueba = true;
        this.estado = 0;
    }
    agregarError(DescripcionE, tipo) {
        ListError.push(new ErrorAna(this.auxiliar, this.contadorE, this.fila, this.columna, DescripcionE, tipo));
        this.auxiliar = "";
        this.contadorE++;
        this.comprueba = true;
        this.estado = 0;
    }
}
var indiceToken = 0;
var traduccion = "";
class AnalizadorSintactico {
    constructor() {
        this.contadorErrores = ListError.length;
        this.indiceToken = 0;
        this.traduccion = "";
        this.traduccionaux = "";
    }
    analisis() {
        let resultado = 1;
        while (indiceToken < listaToken.length) {
            if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE && listaToken[indiceToken + 1].tipoTk == TipoToken.PARENTESISA) {
                resultado = this.LlamadaMetod();
            }
            else if ((listaToken[indiceToken].tipoTk == TipoToken.PUBLIC || listaToken[indiceToken].tipoTk == TipoToken.PRIVATE) && (listaToken[indiceToken + 1].tipoTk == TipoToken.CLASS || listaToken[indiceToken + 1].tipoTk == TipoToken.INTERFACE)) {
                resultado = this.Clases();
            }
            else if ((listaToken[indiceToken].tipoTk == TipoToken.PUBLIC || listaToken[indiceToken].tipoTk == TipoToken.PRIVATE) && (listaToken[indiceToken + 1].tipoTk == TipoToken.INT || listaToken[indiceToken + 1].tipoTk == TipoToken.STRING ||
                listaToken[indiceToken + 1].tipoTk == TipoToken.BOOLEAN || listaToken[indiceToken + 1].tipoTk == TipoToken.CHAR || listaToken[indiceToken + 1].tipoTk == TipoToken.FLOAT)) {
                resultado = this.Metodos();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
                resultado = this.Asignacion();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.STRING || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.FLOAT) {
                resultado = this.Declaracion();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.SYSTEM) {
                resultado = this.System();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.FOR) {
                resultado = this.For();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.IF) {
                resultado = this.If();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.WHILE) {
                resultado = this.While();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.DO) {
                resultado = this.Do();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.COMENTARIO) {
                resultado = this.Comentario();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.ELSE) {
                resultado = this.Else();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.BREAK || listaToken[indiceToken].tipoTk == TipoToken.CONTINUE || listaToken[indiceToken].tipoTk == TipoToken.RETURN) {
                resultado = this.Sent();
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.LLAVE_A) {
                indiceToken++;
                this.traduccionaux += "\n";
                traduccion += this.traduccionaux;
                this.traduccionaux = "";
                resultado = 0;
            }
            else if (listaToken[indiceToken].tipoTk == TipoToken.LLAVE_C) {
                indiceToken++;
                this.traduccionaux += "\n";
                traduccion += this.traduccionaux;
                this.traduccionaux = "";
                resultado = 0;
            }
            else {
                //ACA VAMOS A PONER ERRORES ENCICLADOS
                if (resultado == 1) {
                    console.log("NO ENTRA AL ERROR CREO");
                    this.traduccionaux = "";
                    // si se consume el error  //if(indice_token>=listaToken.length){return 1;}
                    while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
                        console.log(listaToken[indiceToken].valor);
                        indiceToken++;
                    }
                    console.log("NUNCA SALE DE ESA ONDA");
                    if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
                        alert("Se hizo una recuperacion");
                        indiceToken++;
                    }
                    resultado = 0;
                }
            }
        }
        this.Traduccion(traduccion);
    }
    System() {
        if (listaToken[indiceToken].tipoTk == TipoToken.SYSTEM) {
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un Console, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTO) {
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un Punto, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.OUT) {
            indiceToken++;
        }
        else {
            console.log("ESTE ES EL OUT error");
            this.errorSintactico("Se esperaba un write, no un  " + listaToken[indiceToken].tipoToken);
            indiceToken++;
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTO) {
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un Punto, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PRINT || listaToken[indiceToken].tipoTk == TipoToken.PRINTLN) {
            this.traduccionaux += "print";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un write, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            this.traduccionaux += "(";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un parentsis izquierdo, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.CADENA || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una cadena, o variable, entero " + listaToken[indiceToken].tipoToken);
                return 1;
            }
            if (listaToken[indiceToken].tipoTk == TipoToken.SUMA) {
                this.traduccionaux += "+";
                indiceToken++;
            }
            else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
                this.errorSintactico("Se esperaba un parentesis derecho, no un  " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += ")";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un parentesis derecho, no un " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            this.traduccionaux += ";";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Declaracion() {
        if (listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.STRING || listaToken[indiceToken].tipoTk == TipoToken.DOUBLE) {
            this.traduccionaux += "var ";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un parentsis TIPO de variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.COMA || listaToken[indiceToken].tipoTk == TipoToken.CADENA) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            this.traduccionaux += "\;";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Asignacion() {
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            this.traduccionaux += listaToken[indiceToken].valor;
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba una Variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.COMA || listaToken[indiceToken].tipoTk == TipoToken.CADENA) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            this.traduccionaux += ";";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    For() {
        if (listaToken[indiceToken].tipoTk == TipoToken.FOR) {
            this.traduccionaux += listaToken[indiceToken].valor;
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.FOR) {
            this.errorSintactico("Se esperaba un FOR, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISA) {
            this.errorSintactico("Se esperaba un PARENTESISA, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.DOUBLE) {
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un TIPO de variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            this.traduccionaux += " " + listaToken[indiceToken].valor + " in range(";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba una  variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL) {
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.IGUAL) {
            this.errorSintactico("Se esperaba un IGUAL, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL) {
            this.traduccionaux += listaToken[indiceToken].valor + ",";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.ENTERO || listaToken[indiceToken].tipoTk != TipoToken.DECIMAL) {
            this.errorSintactico("Se esperaba un ENTERO O DECIMAL, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            indiceToken++;
            console.log(listaToken[indiceToken].valor);
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba una VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.EXCLAMACION) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            this.traduccionaux += listaToken[indiceToken].valor + "*3";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba una VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.RESTA || listaToken[indiceToken].tipoTk == TipoToken.SUMA) {
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += ")";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            this.errorSintactico("Se esperaba un ), no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    If() {
        if (listaToken[indiceToken].tipoTk == TipoToken.IF) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.IF) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un parentsis izquierdo, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.AND || listaToken[indiceToken].tipoTk == TipoToken.OR
                || listaToken[indiceToken].tipoTk == TipoToken.XOR) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += "\n";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un parentsis derecho, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Else() {
        if (listaToken[indiceToken].tipoTk == TipoToken.ELSE) {
            this.traduccionaux += listaToken[indiceToken].valor + "\n";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.ELSE) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    While() {
        if (listaToken[indiceToken].tipoTk == TipoToken.WHILE) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.WHILE) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISA) {
            this.errorSintactico("Se esperaba un PARENTESIS DERECHO, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.AND || listaToken[indiceToken].tipoTk == TipoToken.OR || listaToken[indiceToken].tipoTk == TipoToken.MENOR_QUE
                || listaToken[indiceToken].tipoTk == TipoToken.MAYOR_QUE || listaToken[indiceToken].tipoTk == TipoToken.XOR) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += listaToken[indiceToken].valor + ":\n";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            this.errorSintactico("Se esperaba un PARENTESIS IZQUIERDO, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Do() {
        if (listaToken[indiceToken].tipoTk == TipoToken.DO) {
            this.traduccionaux += "While(True):\n";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.DO) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Comentario() {
        if (listaToken[indiceToken].tipoTk == TipoToken.COMENTARIO) {
            this.traduccionaux += listaToken[indiceToken].valor;
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.COMENTARIO) {
            this.errorSintactico("Se esperaba un COMENTARIO, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Clases() {
        console.log("ENTRA ACA CLASE");
        if (listaToken[indiceToken].valor == "public" || listaToken[indiceToken].valor == "private") {
            console.log("ENTRAMOS AL PUBLIC DE LA CLASE");
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PUBLIC || listaToken[indiceToken].tipoTk != TipoToken.PRIVATE) {
            this.errorSintactico("Se esperaba un PUBLIC O PRIVATE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.CLASS || listaToken[indiceToken].tipoTk == TipoToken.INTERFACE) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.CLASS || listaToken[indiceToken].tipoTk != TipoToken.INTERFACE) {
            this.errorSintactico("Se esperaba un CLASS, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            console.log("PROBANDO SI ENTRA ACA");
            this.traduccionaux += listaToken[indiceToken].valor + " :";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba una VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Metodos() {
        if (listaToken[indiceToken].valor == "public" || listaToken[indiceToken].valor == "private") {
            console.log("ENTRA ACA METODO");
            this.traduccionaux += "def ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PUBLIC || listaToken[indiceToken].tipoTk != TipoToken.PRIVATE) {
            this.errorSintactico("Se esperaba un PUBLIC O PRIVATE , no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            if (listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.FLOAT
                || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN) {
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una TIPO PARA ESPECIFICAR EL METODO,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba un VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            this.traduccionaux += "( ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISA) {
            this.errorSintactico("Se esperaba un (, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.FLOAT || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN
                || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.COMA) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += " )";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            this.errorSintactico("Se esperaba un ), no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Sent() {
        return 0;
    }
    LlamadaMetod() {
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            console.log("PROBANDO SI ENTRA ACA");
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        }
        else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            this.traduccionaux += "(";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un parentsis izquierdo, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.CADENA || listaToken[indiceToken].tipoTk == TipoToken.COMA) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            }
            else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += ")\n";
            indiceToken++;
        }
        else {
            this.errorSintactico("Se esperaba un parentsis derecho, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Traduccion(texto) {
        console.log("esta es la traduccion");
        //alert(texto);
        var blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    }
    errorSintactico(description) {
        this.contadorErrores++;
        ListError.push(new ErrorAna(listaToken[indiceToken].valor, this.contadorErrores, listaToken[indiceToken].fila, listaToken[indiceToken].columna, description, "Sintactico"));
    }
}
var errores = "";
var tokens = "";
class Inicio {
    start(cadena) {
        var analizadorLexico = new AnalizadorLéxico();
        listaToken.pop();
        console.log(cadena + "    ESTA ES LA CADENA QUE SE ENVIA");
        //var cadena = "public class clasesita{ }";
        //var cadena = (document.getElementById("contenido_archivo") as HTMLInputElement).value;
        analizadorLexico.start(cadena);
        var index = 0;
        while (index < listaToken.length) {
            tokens += +listaToken[index].contador + ".  TOKEN RECONOCIDO" + listaToken[index].tipoToken + " VALOR DE: " + listaToken[index].valor + " EN LA FILA" + listaToken[index].fila + " EN LA COLUMNA" + listaToken[index].columna + "\n";
            console.log(listaToken[index].tipoToken + "  " + listaToken[index].valor);
            index++;
        }
        var indexaux = 0;
        console.log("*************ESTE ES UN ERROOOOOOOOOOOOR*************");
        while (indexaux < ListError.length) {
            errores += ListError[indexaux].descripcion + "   " + ListError[indexaux].valor + " " + ListError[indexaux].fila + " " + ListError[indexaux].columna + " " + ListError[indexaux].tipo + "\n";
            console.log(ListError[indexaux].descripcion + " " + ListError[indexaux].valor);
            indexaux++;
        }
        //alert(errores);
        //this.ListaError(errores);
        console.log("*************ESTE ES UN ERROOOOOOOOOOOOR*************");
    }
    Traduccion() {
        return traduccion;
    }
    ListaErrores() {
        return errores;
    }
}
