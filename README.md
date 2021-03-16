## Express

### Express 미들웨어
``` 공통 서비스 및 기능을 애플리케이션에 제공하는 소프트웨어 ```
> 개발자들이 애플리케이션을 보다 효율적으로 구축할 수 있도록 지원하며 애플리케이션, 데이터 및 사용자 사이를 연결하는 요소

### 라우터? 라우팅?
**라우터**
``` 데이터의 전송을 위한 경로 지정함 ```
**라우팅**
```한 네트워크에서 다른 네트워크로 ^패킷을 이동시키는 과정과 네트워크 안 호스트에게 패킷들을 전달하는 과정```
^ 패킷 : 네트워크를 통해 전송하기 쉽도록 자른 데이터의 전송 단위

### Vieww engine (뷰 엔진)
> 응답 웹 페이지를 독립적으로 작성하고 활용할 수 있게 하기 위해 있는 시스템

### 템플릿 문서
> 뷰 엔진으로 표시하는 웹 페이지, <br>
이 템플릿 문서에 데이터 변수의 값을 노출할 수 있는 방법 제공
``` [ex] ejs, pug ```

===
## Syntax

### next()
``` 미들웨어의 흐름제어 ```
> 미들웨어의 마지막에서 명시적으로 호출해주어야 <br>
다음 미들웨어로 요청과 응답을 핸들링 할 수 있는 컨트롤을 전송할 수 있음

### __filename, __dirname
> ```__filename``` 은 현재 실행 중인 파일 경로
  ```__dirname``` 은 현재 실행 중인 폴더 경로

### express.static()
> 여러 개의 정적 자산 디렉토리를 이용하기 위해 사용
``` js
app.use(express.static(__dirname+"/public"));
```
=> public 디렉토리에 포함된 파일을 로드할 수 있음