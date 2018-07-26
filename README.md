# SIMPLUS
[![Build Status](https://travis-ci.org/DevJoseWeb/SIMPLUS.svg?branch=master)](https://travis-ci.org/DevJoseWeb/SIMPLUS)


[![Build Status](https://github.com/DevJoseWeb/SIMPLUS/blob/master/1.png)](https://www.youtube.com/watch?v=EBKLgGdJ-LA)
[![Build Status](https://github.com/DevJoseWeb/SIMPLUS/blob/master/2.png)](https://www.youtube.com/watch?v=EBKLgGdJ-LA)


#SIMPLUS CLIENTE

1 - git clone https://github.com/DevJoseWeb/SIMPLUS

2 - cd simplus-cliente	

3 - yarn install

4 - ng serve

5 - http://localhost:4200/

#SIMPLUS - API
Executar API:
./gradlew build && java -jar build/libs/gs-spring-boot-0.1.0.jar
 ou
java -jar gestao-0.0.1-SNAPSHOT.jar

Endereços
  
  http://localhost:4200/list-product  //Todos Produtos de Todas Empresas

  http://localhost:4200/list-product13 //Todos os Produtos da Empresa 1

  http://localhost:4200/list-product14 //Todos os Produtos da Empresa 2

  http://localhost:4200/list-product14e1 //Caixas Empresa 1

  http://localhost:4200/list-product14e2 //Caixas Empresa 2
  
Downaload XLS
  http://localhost:4200/download1 //Relatório com os Produtos da Empresa 1

  http://localhost:4200/download1cx1 //Relatório com os Produtos da Empresa 1 caixa

  http://localhost:4200/download2 //Relatório com os Produtos da empresa 2

  http://localhost:4200/download2cx2 //Relatório com os Produtos da Empresa 2 caixa

  API_URL = 'http://localhost:8080/products'; // Todos Todas

  API_URL13 = 'http://localhost:8080/companys/1/products'; // Todos Empresa 1

  API_URL14 = 'http://localhost:8080/companys/2/products'; // Todos Empresa 2

  API_URL14_CX_EM1 = 'http://localhost:8080/companys/1/gtln14'; // Caixas Empresa 1

  API_URL14_CX_EM2 = 'http://localhost:8080/companys/2/gtln14'; // Caixas Empresa 2

  API_URL13_PRO_EM1 = 'http://localhost:8080/companys/1/gtln13'; // Produtos Empresa 1

  API_URL13_PRO_EM2 = 'http://localhost:8080/companys/2/gtln13'; // Produtos Empresa 2
  
  API_DOWNLOAD = 'http://localhost:8080/download';
