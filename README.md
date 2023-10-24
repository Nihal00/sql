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


## ACID properties
- Properties of a transaction
- Atomicity : Transaction should be complete or not happen at all
- Consistency : After transaction completion, data must maintain its consistency
- Isolation : Multiple users can perform their transactions concurrently without affecting each other's results
- Durability : Once the transaction is committed, it will remain so even in case of system failure

#### Atomicity
- Every Transaction is either completely successful or failed entirely. There in no mid way.

#### Consistency
- A consistent set of read operations on non-replicated objects are executed by every node in the cluster.
- The Data is consistent before and after the transaction

#### Isolation
- Multiple transactions can occur concurrently without any interference between them.
- Ensures when multipy transaction can occure concurrently it doesn't make the data inconsistent

#### Durabitily
- All changes made by a transaction are recorded in the log file
- In case of crash recovery, we need to replay the logs to bring back the database to previous state
- Ensures that the data is never lost even in case of system failure.
- Data is Persistent


## Types of SQL Commands
1. DDL (Data Definition Language): CREATE, ALTER, DROP
2. DML (Data Manipulation Language): INSERT, UPDATE, DELETE
3. DCL (Data Control Language): GRANT, REVOKE
4. TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION
5. DQL (Data Query Language) SELECT

### DDL => Data Definition Language
- DDL Commonds are used to define structure of a table / database
    - CREATE
    - DROP
    - ALTER
### DML => Data Manipulation Language 
- Manpulation or Modefying data in tables
    - INSERT
    - UPDATE
    - DELETE

### DCL => Data Control Language
- Used for access control
- They are used to grant and take back authority from database user
    - GRANT => GRANT UPDATE, INSERT ON USERS TO NIHAL;
    - REVOKE

### TCL => Transaction Control Language 
- It controls the flow of data manipulated within a single session
- These commands do not perform any action on data but they manage the work done by other commands
    - COMMIT
    - ROLLBACK
    - SAVE POINT
    - SET TRANSACTION ISOLATION LEVEL

### DQL => Data Query Language
- Queries the data stored in the Database
    - SELECT => SELECT * FROM Users;
    

## Primary key
- Which is unique identifis records in a table
- Unique and not null

## Candidate key
- columns which can become primary key
- A column or group of columns in a relation schema that uniquely identify each record

## Alternate key
- Alternate key is a candidate key which is not primary key

## Foreign key
- Foreign key is a column in one table that refers to the primary key of another tabel
- Columns in one table that refer to the PRIMARY KEY in another table
- This helps maintain the relationship between two related tables

## Running SQL Commands
