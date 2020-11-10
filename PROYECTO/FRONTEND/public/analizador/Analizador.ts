
class Token {
    private Fila: number;
    private Columna: number;
    private Valor: string;
    private Contador: number;

    //GET Y SET PARA FILA
    public get fila(): number {
        return this.Fila;
    }
    public set fila(value: number) {
        this.Fila = value;
    }
    //GET Y SET PARA COLUMNA
    public get columna(): number {
        return this.Columna;
    }
    public set columna(value: number) {
        this.Columna = value;
    }
    //GET Y SET PARA VALOR
    public get valor(): string {
        return this.Valor;
    }
    public set valor(value: string) {
        this.Valor = value;
    }
    //GET Y SET PARA CONTADOR
    public get contador(): number {
        return this.Contador;
    }
    public set contador(value: number) {
        this.Contador = value;
    }
    //GET Y SET PARA TIPO TOKEN
    private Tipo_tk: TipoToken;
    public get tipoTk(): TipoToken {
        return this.Tipo_tk;
    }
    public set tipoTk(value: TipoToken) {
        this.Tipo_tk = value;
    }

    public get tipoToken(): String {
        switch (this.tipoTk) {
            case TipoToken.VARIABLE:
                return "VARIABLE";
            case TipoToken.CADENA:
                return "CADENA";
            case TipoToken.ENTERO:
                return "ENTERO"
            case TipoToken.DECIMAL:
                return "DECIMAL";
            case TipoToken.DOS_PUNTOS:
                return "DOS_PUNTOS"
            case TipoToken.CHAR:
                return "CHAR"
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

    constructor(tipoTk: TipoToken, valor: string, fila: number, columna: number, contador: number) {
        this.Fila = fila;
        this.Columna = columna;
        this.Contador = contador;
        this.Valor = valor;
        this.Tipo_tk = tipoTk;
    }
}

enum TipoToken {
    PALABRA_RESERVADA,
    DESCONOCIDO,
    VARIABLE,
    DOUBLE,
    CADENA,
    RETURN,
    ENTERO,
    DECIMAL,
    DOS_PUNTOS,
    CHAR,
    LLAVE_A,
    LLAVE_C,
    PUNTOYCOMA,
    COMILLAS,
    PARENTESISA,
    PARENTESISC,
    COMA,
    COMENTARIO_INICIA,
    COMENTARIO_TERMINA,
    CORCHETEA,
    CORCHETEC,
    IGUAL,
    PUNTO,
    COMENTARIO,
    SUMA,
    RESTA,
    DIVISION,
    MULTIPLICACION,
    DOBLE_IGUAL,
    MENOR_QUE,
    MAYOR_QUE,
    EXCLAMACION,
    INT,
    FLOAT,
    STRING,
    BOOLEAN,
    CLASS,
    STATIC,
    VOID,
    MAIN,
    ARGS,
    INTERFACE,
    SYSTEM,
    OUT,
    PRINT,
    PRINTLN,
    IF,
    ELSE,
    FOR,
    WHILE,
    DO,
    FALSE,
    TRUE,
    BREAK,
    CONTINUE,
    AND,
    OR,
    CARACTER,
    DIFERENTE_DE,
    XOR,
    PUBLIC,
    PRIVATE,
}

class ErrorAna {
    private ValorE: string;
    private ContadorE: number;
    private FilaE: number;
    private ColumnaE: number;
    private DescripcionE: string;
    private TipoE: string;

    public get valor(): string {
        return this.ValorE;
    }
    public set valor(value: string) {
        this.ValorE = value;
    }

    public get contadorE(): number {
        return this.ContadorE;
    }
    public set contadorE(value: number) {
        this.ContadorE = value;
    }

    public get fila(): number {
        return this.FilaE;
    }
    public set fila(value: number) {
        this.FilaE = value;
    }

    public get columna(): number {
        return this.ColumnaE;
    }
    public set columna(value: number) {
        this.ColumnaE = value;
    }

    public get descripcion(): string {
        return this.DescripcionE;
    }
    public set descripcion(value: string) {
        this.DescripcionE = value;
    }

    public get tipo(): string {
        return this.TipoE;
    }
    public set tipo(value: string) {
        this.TipoE = value;
    }

    constructor(valor: string, contadorE: number, fila: number, columna: number, descripcion: string, tipo: string) {
        this.ValorE = valor;
        this.ContadorE = contadorE;
        this.FilaE = fila;
        this.ColumnaE = columna;
        this.DescripcionE = descripcion;
        this.TipoE = tipo;
    }
}
var listaToken: Array<Token> = new Array<Token>();
var ListError: Array<ErrorAna> = new Array<ErrorAna>();

class AnalizadorLéxico{
    constructor() { }

    listaToken = new Array<Token>();

    fila = 1; columna = 0; estado = 0; contadorToken = 1;
    contadorE = 1; columnaT = 0; comprueba = true;
    auxiliar: string = "";

    start(cadena: string) {
        ListError = new Array<ErrorAna>();
        var c;

        for (let index = 0; index < cadena.length; index++) {
            c = cadena.charAt(index);
            if (c == '\n') { this.fila++; this.columna = 0; } else { this.columna++; }
            if (c != '\n' && c != ' ' && this.comprueba) { this.columnaT = this.columna; this.comprueba = false; }

            switch (this.estado) {
                case 0:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) { this.auxiliar += c; this.estado = 1; }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) { this.auxiliar += c; this.estado = 3; }
                    else if (c == '"') { this.auxiliar += c; this.estado = 6; }
                    else if (c == '\'') { this.auxiliar += c; this.estado = 8; }
                    else if (c == '/') { this.auxiliar += c; this.estado = 11; }
                    else if (c == '{') { this.auxiliar += c; this.agregarTk(TipoToken.LLAVE_A); }
                    else if (c == '}') { this.auxiliar += c; this.agregarTk(TipoToken.LLAVE_C); }
                    else if (c == '(') { this.auxiliar += c; this.agregarTk(TipoToken.PARENTESISA); }
                    else if (c == ')') { this.auxiliar += c; this.agregarTk(TipoToken.PARENTESISC); }
                    else if (c == '[') { this.auxiliar += c; this.agregarTk(TipoToken.CORCHETEA); }
                    else if (c == ']') { this.auxiliar += c; this.agregarTk(TipoToken.CORCHETEC); }
                    else if (c == '+') { this.auxiliar += c; this.agregarTk(TipoToken.SUMA); }
                    else if (c == '-') { this.auxiliar += c; this.agregarTk(TipoToken.RESTA); }
                    else if (c == '*') { this.auxiliar += c; this.agregarTk(TipoToken.MULTIPLICACION); }
                    else if (c == '=') { this.auxiliar += c; this.agregarTk(TipoToken.IGUAL); }
                    else if (c == ':') { this.auxiliar += c; this.agregarTk(TipoToken.DOS_PUNTOS); }
                    else if (c == ';') { this.auxiliar += c; this.agregarTk(TipoToken.PUNTOYCOMA); }
                    else if (c == '>') { this.auxiliar += c; this.agregarTk(TipoToken.MAYOR_QUE); }
                    else if (c == '<') { this.auxiliar += c; this.agregarTk(TipoToken.MENOR_QUE); }
                    else if (c == '!') { this.auxiliar += c; this.agregarTk(TipoToken.EXCLAMACION); }
                    else if (c == ',') { this.auxiliar += c; this.agregarTk(TipoToken.COMA); }
                    else if (c == '.') { this.auxiliar += c; this.agregarTk(TipoToken.PUNTO); }
                    else if (c == '&') { this.auxiliar += c; this.agregarTk(TipoToken.AND); }
                    else if (c == '|') { this.auxiliar += c; this.agregarTk(TipoToken.OR); }
                    else if (c == '^') { this.auxiliar += c; this.agregarTk(TipoToken.XOR); }
                    else {
                        if (c != '\n' && c.charCodeAt(0) != 32 && c.charCodeAt(0) != 9 && c.charCodeAt(0) != 13) {
                            this.auxiliar += c;
                            console.log("ACA ESTA " + c);
                            this.agregarError("El simbolo no es parte del sistema aca" + c, " ERROR LEXICO");
                        } else {
                            this.agregarError("El simbolo no es parte del sistema aca" + c, " ERROR LEXICO");
                        }
                    }
                    break;
                case 1:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) { this.auxiliar += c; this.estado = 1; }
                    else if (c == '_') { this.auxiliar += c; this.estado = 2; }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) { this.auxiliar += c; this.estado = 2; }
                    else { this.verificarPR(); index--; this.columna--; }
                    break;
                case 2:
                    if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) < 123)) { this.auxiliar += c; this.estado = 2; }
                    else if (c == '_') { this.auxiliar += c; this.estado = 2; }
                    else if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) { this.auxiliar += c; this.estado = 2; }
                    else { this.agregarTk(TipoToken.VARIABLE); index--; this.columna--; }
                    break;
                case 3:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) { this.auxiliar += c; this.estado = 3; }
                    else if (c == '.') { this.auxiliar += c; this.estado = 4; }
                    else { this.agregarTk(TipoToken.ENTERO); index--; this.columna--; }
                    break;
                case 4:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) { this.auxiliar += c; this.estado = 5; }
                    else { this.agregarError("Se esperaba un numero despues del punto no:" + c, "Tipo Sintactico"); index--; this.columna--; }
                    break;
                case 5:
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) { this.auxiliar += c; this.estado = 5; }
                    else { this.agregarTk(TipoToken.DECIMAL); index--; this.columna--; }
                    break;
                case 6:
                    if (c == '"') { this.auxiliar += c; this.agregarTk(TipoToken.CADENA); }
                    else if (c == '\\') { this.auxiliar += c; this.estado = 7 }
                    else { this.auxiliar += c; }
                    break;
                case 7:
                    this.auxiliar += c; this.estado = 6;
                    break;
                case 8:
                    if (c == '\\') { this.auxiliar += c; this.estado = 9; }
                    else { this.auxiliar += c; this.estado = 10; }
                    break;
                case 9:
                    this.auxiliar += c; this.estado = 10;
                    break;
                case 10:
                    if (c == '\'') { this.auxiliar += c; this.agregarTk(TipoToken.CARACTER); }
                    else { this.agregarError("Se esperaba un ' no el caracter: " + c, "Sintactico"); index--; this.columna--; }
                    break;
                case 11:
                    if (c == '/') { this.auxiliar += c; this.agregarTk(TipoToken.COMENTARIO); this.estado = 12; }
                    else if (c == '*') { this.auxiliar += c; this.agregarTk(TipoToken.COMENTARIO_INICIA); this.estado = 13; }
                    else { this.agregarTk(TipoToken.DIVISION); index--; this.columna--; }
                    break;
                case 12:
                    if (c != '\n') { this.auxiliar += c; this.estado = 12; }
                    else { this.agregarTk(TipoToken.CADENA) }
                    break;
                case 13:
                    if (c == '*') { this.auxiliar += c; this.estado = 14; }
                    else { this.auxiliar += c; this.estado = 13; }
                    break;
                case 14:
                    if (c == '/') { this.agregarTk(TipoToken.CADENA); this.auxiliar += c; this.agregarTk(TipoToken.COMENTARIO_TERMINA); }
                    else { this.auxiliar += c; this.estado = 13; }
                    break;
                default:

                    break;
            }
        }
        let AnaSinta: AnalizadorSintactico = new AnalizadorSintactico();
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

    agregarTk(tipoToken: TipoToken) {
        listaToken.push(new Token(tipoToken, this.auxiliar, this.fila, this.columnaT, this.contadorToken));
        this.auxiliar = "";
        this.contadorToken++;
        this.comprueba = true;
        this.estado = 0;
    }

    agregarError(DescripcionE: string, tipo: string) {
        ListError.push(new ErrorAna(this.auxiliar, this.contadorE, this.fila, this.columna, DescripcionE, tipo));
        this.auxiliar = "";
        this.contadorE++;
        this.comprueba = true;
        this.estado = 0;
    }

}
var indiceToken = 0;
var traduccion: string = "";
class AnalizadorSintactico {
    contadorErrores = ListError.length;
    indiceToken = 0;
    traduccion = "";
    traduccionaux = "";
    analisis() {
        let resultado = 1;
        while (indiceToken < listaToken.length) {
            if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE && listaToken[indiceToken + 1].tipoTk == TipoToken.PARENTESISA) {
                resultado = this.LlamadaMetod();
            } else if ((listaToken[indiceToken].tipoTk == TipoToken.PUBLIC || listaToken[indiceToken].tipoTk == TipoToken.PRIVATE) && (listaToken[indiceToken+1].tipoTk == TipoToken.CLASS || listaToken[indiceToken+1].tipoTk == TipoToken.INTERFACE)) {
                resultado = this.Clases();
            } else if ((listaToken[indiceToken].tipoTk == TipoToken.PUBLIC || listaToken[indiceToken].tipoTk == TipoToken.PRIVATE) && (listaToken[indiceToken+1].tipoTk == TipoToken.INT || listaToken[indiceToken+1].tipoTk == TipoToken.STRING ||
                listaToken[indiceToken+1].tipoTk == TipoToken.BOOLEAN || listaToken[indiceToken+1].tipoTk == TipoToken.CHAR || listaToken[indiceToken+1].tipoTk == TipoToken.FLOAT )) {
                resultado = this.Metodos();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
                resultado = this.Asignacion(); 
            } else if (listaToken[indiceToken].tipoTk == TipoToken.STRING || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.FLOAT) {
                resultado = this.Declaracion();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.SYSTEM) {
                resultado = this.System();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.FOR) {
                resultado = this.For();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.IF) {
                resultado = this.If();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.WHILE) {
                resultado = this.While();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.DO) {
                resultado = this.Do();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.COMENTARIO) {
                resultado = this.Comentario();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.ELSE) {
                resultado = this.Else();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.BREAK || listaToken[indiceToken].tipoTk == TipoToken.CONTINUE || listaToken[indiceToken].tipoTk == TipoToken.RETURN) {
                resultado = this.Sent();
            } else if (listaToken[indiceToken].tipoTk == TipoToken.LLAVE_A) {
                indiceToken++;
                this.traduccionaux += "\n";
                traduccion += this.traduccionaux;
                this.traduccionaux = "";
                resultado = 0;
            } else if (listaToken[indiceToken].tipoTk == TipoToken.LLAVE_C) {
                indiceToken++;
                this.traduccionaux += "\n";
                traduccion += this.traduccionaux;
                this.traduccionaux = "";
                resultado = 0;
            } else {
                //ACA VAMOS A PONER ERRORES ENCICLADOS
                if (resultado == 1) {
                    console.log("NO ENTRA AL ERROR CREO")
                    this.traduccionaux = "";
                    // si se consume el error  //if(indice_token>=listaToken.length){return 1;}
                    while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
                        console.log(listaToken[indiceToken].valor)
                        indiceToken++;
                    }
                    console.log("NUNCA SALE DE ESA ONDA")
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

    System(): number {

        if (listaToken[indiceToken].tipoTk == TipoToken.SYSTEM) {

            indiceToken++;

        } else {
            this.errorSintactico("Se esperaba un Console, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTO) {

            indiceToken++;

        } else {
            this.errorSintactico("Se esperaba un Punto, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.OUT) {
            indiceToken++;

        } else {
            console.log("ESTE ES EL OUT error");
            this.errorSintactico("Se esperaba un write, no un  " + listaToken[indiceToken].tipoToken);
            indiceToken++;
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTO) {
            indiceToken++;

        } else {
            this.errorSintactico("Se esperaba un Punto, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PRINT || listaToken[indiceToken].tipoTk == TipoToken.PRINTLN) {
            this.traduccionaux += "print";
            indiceToken++;

        } else {
            this.errorSintactico("Se esperaba un write, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            this.traduccionaux += "(";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un parentsis izquierdo, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.CADENA || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una cadena, o variable, entero " + listaToken[indiceToken].tipoToken);
                return 1;
            }
            if (listaToken[indiceToken].tipoTk == TipoToken.SUMA) {
                this.traduccionaux += "+";
                indiceToken++;
            } else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {

                this.errorSintactico("Se esperaba un parentesis derecho, no un  " + listaToken[indiceToken].tipoToken);
                return 1;
            }

        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += ")";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un parentesis derecho, no un " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            this.traduccionaux += ";";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }

    Declaracion(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.STRING || listaToken[indiceToken].tipoTk == TipoToken.DOUBLE) {
            this.traduccionaux += "var ";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un parentsis TIPO de variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.COMA || listaToken[indiceToken].tipoTk == TipoToken.CADENA) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            this.traduccionaux += "\;";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Asignacion(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            this.traduccionaux += listaToken[indiceToken].valor;
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba una Variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.COMA || listaToken[indiceToken].tipoTk == TipoToken.CADENA) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            this.traduccionaux += ";";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    For(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.FOR) {
            this.traduccionaux += listaToken[indiceToken].valor;
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.FOR) {
            this.errorSintactico("Se esperaba un FOR, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {

            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISA) {
            this.errorSintactico("Se esperaba un PARENTESISA, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.DOUBLE) {

            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un TIPO de variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            this.traduccionaux += " " + listaToken[indiceToken].valor + " in range(";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba una  variable, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL) {

            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.IGUAL) {
            this.errorSintactico("Se esperaba un IGUAL, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL) {
            this.traduccionaux += listaToken[indiceToken].valor + ",";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.ENTERO || listaToken[indiceToken].tipoTk != TipoToken.DECIMAL) {
            this.errorSintactico("Se esperaba un ENTERO O DECIMAL, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {

            indiceToken++;
            console.log(listaToken[indiceToken].valor);
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {

            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba una VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            if (listaToken[indiceToken].tipoTk == TipoToken.IGUAL || listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.EXCLAMACION) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PUNTOYCOMA) {
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PUNTOYCOMA) {
            this.errorSintactico("Se esperaba un punto y coma, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            this.traduccionaux += listaToken[indiceToken].valor + "*3";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba una VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.RESTA || listaToken[indiceToken].tipoTk == TipoToken.SUMA) {

                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += ")";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            this.errorSintactico("Se esperaba un ), no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    If(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.IF) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.IF) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {

            indiceToken++;
        } else {
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
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += "\n";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un parentsis derecho, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Else(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.ELSE) {
            this.traduccionaux += listaToken[indiceToken].valor + "\n";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.ELSE) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    While(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.WHILE) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.WHILE) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISA) {
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
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += listaToken[indiceToken].valor + ":\n";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            this.errorSintactico("Se esperaba un PARENTESIS IZQUIERDO, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Do(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.DO) {
            this.traduccionaux += "While(True):\n";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.DO) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Comentario(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.COMENTARIO ) {
            this.traduccionaux += listaToken[indiceToken].valor;
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.COMENTARIO) {
            this.errorSintactico("Se esperaba un COMENTARIO, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Clases():number{
        console.log("ENTRA ACA CLASE");
        if (listaToken[indiceToken].valor == "public" ||listaToken[indiceToken].valor == "private" ) {
            console.log("ENTRAMOS AL PUBLIC DE LA CLASE")
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PUBLIC ||listaToken[indiceToken].tipoTk != TipoToken.PRIVATE ) {
            this.errorSintactico("Se esperaba un PUBLIC O PRIVATE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.CLASS ||listaToken[indiceToken].tipoTk == TipoToken.INTERFACE) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.CLASS ||listaToken[indiceToken].tipoTk != TipoToken.INTERFACE) {
            this.errorSintactico("Se esperaba un CLASS, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE ) {
            console.log("PROBANDO SI ENTRA ACA");
            this.traduccionaux += listaToken[indiceToken].valor + " :";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE ) {
            this.errorSintactico("Se esperaba una VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Metodos():number{
        if (listaToken[indiceToken].valor == "public"  || listaToken[indiceToken].valor == "private") {
            console.log("ENTRA ACA METODO");
            this.traduccionaux +="def ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PUBLIC || listaToken[indiceToken].tipoTk != TipoToken.PRIVATE) {
            this.errorSintactico("Se esperaba un PUBLIC O PRIVATE , no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            if (listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.FLOAT
                || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN) {
                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una TIPO PARA ESPECIFICAR EL METODO,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE ) {
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE ) {
            this.errorSintactico("Se esperaba un VARIABLE, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA ) {
            this.traduccionaux +="( ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISA ) {
            this.errorSintactico("Se esperaba un (, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.INT || listaToken[indiceToken].tipoTk == TipoToken.FLOAT || listaToken[indiceToken].tipoTk == TipoToken.BOOLEAN
                || listaToken[indiceToken].tipoTk == TipoToken.CHAR || listaToken[indiceToken].tipoTk == TipoToken.COMA) {
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }

        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC ) {
            this.traduccionaux +=" )";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC ) {
            this.errorSintactico("Se esperaba un ), no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }
    Sent():number{
        return 0;
    }
    LlamadaMetod(): number {
        if (listaToken[indiceToken].tipoTk == TipoToken.VARIABLE) {
            console.log("PROBANDO SI ENTRA ACA");
            this.traduccionaux += listaToken[indiceToken].valor + " ";
            indiceToken++;
        } else if (listaToken[indiceToken].tipoTk != TipoToken.VARIABLE) {
            this.errorSintactico("Se esperaba un IF, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISA) {
            this.traduccionaux +="(";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un parentsis izquierdo, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        while (listaToken[indiceToken].tipoTk != TipoToken.PARENTESISC) {
            if ( listaToken[indiceToken].tipoTk == TipoToken.VARIABLE
                || listaToken[indiceToken].tipoTk == TipoToken.ENTERO || listaToken[indiceToken].tipoTk == TipoToken.DECIMAL || listaToken[indiceToken].tipoTk == TipoToken.TRUE
                || listaToken[indiceToken].tipoTk == TipoToken.FALSE || listaToken[indiceToken].tipoTk == TipoToken.CADENA || listaToken[indiceToken].tipoTk == TipoToken.COMA){
                this.traduccionaux += listaToken[indiceToken].valor;
                indiceToken++;
            } else {
                this.errorSintactico("Se esperaba una variable,  signo igual o un valor " + listaToken[indiceToken].tipoToken);
                return 1;
            }
        }
        if (listaToken[indiceToken].tipoTk == TipoToken.PARENTESISC) {
            this.traduccionaux += ")\n";
            indiceToken++;
        } else {
            this.errorSintactico("Se esperaba un parentsis derecho, no un  " + listaToken[indiceToken].tipoToken);
            return 1;
        }
        traduccion += this.traduccionaux;
        this.traduccionaux = "";
        return 0;
    }

    Traduccion(texto: string){
        console.log("esta es la traduccion");
        //alert(texto);
        var blob = new Blob([texto], {type: "text/plain;charset=utf-8"});
    }

    errorSintactico(description: string) {
        this.contadorErrores++;
        ListError.push(new ErrorAna(listaToken[indiceToken].valor, this.contadorErrores, listaToken[indiceToken].fila, listaToken[indiceToken].columna, description, "Sintactico"));
    }
}

var errores: string="";
var tokens: string="";
class Inicio {
    start(cadena: string){
        var analizadorLexico: AnalizadorLéxico = new AnalizadorLéxico();
        listaToken.pop();
        console.log(cadena+"    ESTA ES LA CADENA QUE SE ENVIA");
        //var cadena = "public class clasesita{ }";
        //var cadena = (document.getElementById("contenido_archivo") as HTMLInputElement).value;
        analizadorLexico.start(cadena);
        var index = 0;
        
        while (index < listaToken.length) {
            tokens+=+listaToken[index].contador +".  TOKEN RECONOCIDO"+ listaToken[index].tipoToken+ " VALOR DE: "+ listaToken[index].valor +" EN LA FILA" + listaToken[index].fila+ " EN LA COLUMNA"+ listaToken[index].columna+"\n";
            console.log(listaToken[index].tipoToken + "  " + listaToken[index].valor);
            index++;
        }
        var indexaux = 0;
        console.log("*************ESTE ES UN ERROOOOOOOOOOOOR*************");
        while (indexaux < ListError.length) {
            errores+= ListError[indexaux].descripcion + "   " + ListError[indexaux].valor +" "+ListError[indexaux].fila+" "+ListError[indexaux].columna+" "+ ListError[indexaux].tipo+"\n";
            console.log(ListError[indexaux].descripcion + " " + ListError[indexaux].valor);
            indexaux++;
        }
        //alert(errores);
        //this.ListaError(errores);
        console.log("*************ESTE ES UN ERROOOOOOOOOOOOR*************");
    }
    Traduccion():string{
        return traduccion;
    }
    ListaErrores():string{
        return errores;
    }
}