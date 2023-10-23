# SQL => Structured Query Language

- Table format
- Data is stored in form of rows and columns
- RDBMS => Relational Database Management System

## SQL Datatypes

### Numeric
1. BIT => 1-6
2. TINYINT => -129 to 127, twio thing Unsigned and signed tinyint
3. BOOL/ BOOLEAN => 0, false, 1, true
4. SMALL INT => -32768 to 32767
5. MEDIUM INT => -8388608 to 8388607
6. INTEGER/ INT => -2147483648 to 2147483647
7. BIGINT => -9223372036854775808 to 92
8. FLOAT(P) => P = total number after decimal point upto 65
9. DOUBLE(P,D) => P=total numbers after decimal point & D= total digits before decimal point
10. DECIMAL (M,D)=> M=Total digit , D=decimal places => Adds fixed point decimal value

### Date and Time datatypes
1. DATE => YYYY-MM--DD
2. DATETIME => YYYY-MM-DD HH:MM:SS
3. TIMESTAMP => YYYY-MM-DD HH:MM:SS + timezone info => IST||UTC||GMT
4. TIME => HH:MM:SS
5. YEAR => 0000-9999

### String datatype
1. CHAR => Fixed length string (0 - 255), letters, numbers, special characters
2. VARCHAR => Variable length string (0 - 65535), letters, numbers, special characters


### BLOB => Binary Large OBject
- Tiny
- Medium
- Long


### ENUM (Val1, Val2, Val3) => Enumration
- Predefining list of possible value


1. Integer: INT, SMALLINT, BIGINT
2. Float: FLOAT, REAL, DECIMAL(Precision, Scale)
3. Date & Time: DATE, TIME, DATETIME, TIMESTAMP
4. Character: CHAR, VARCHAR, LONGVARCHAR, NCHAR, NVARCHAR, LONGNVARCHAR
5. Binary: BINARY, VARBINARY, LONGBINARY
6. Boolean: BOOLEAN (MySQL)
