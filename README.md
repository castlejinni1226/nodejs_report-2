[# nodejs_report-2](https://www.notion.so/4b133720c27f4f4c81108d8d1df3adb0?v=675b20461c804c9c84561aa1f816f91b)https://www.notion.so/4b133720c27f4f4c81108d8d1df3adb0?v=675b20461c804c9c84561aa1f816f91b

<img width="892" alt="스크린샷 2024-02-02 오전 7 26 32" src="https://github.com/castlejinni1226/nodejs_report-2/assets/154488198/66d66df3-b59e-4729-be71-f289fe0c4ac2">

1. 암호화 방식
    * 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 단방향 암호화와 양방향 암호화 중 어떤 암호화 방식에 해당할까요? —> 단방향 암호화방식(해싱)
    * 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요? —> 비밀번호를 저장할때 그냥 평문으로 저장하면 해킹에 취약해질수 있습니다. 또한 단방향이라 복호화가 되지않아 보안이 우수합니다.

2. 인증 방식
* JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요? —->Access Token의 유효기간이 끝날때 까지 서버에서 차단하거나 조치를 취할 수 없습니다.
* 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요? —>Access Token에 유효기간을 짧게 설정해줌으로써 빠르게 권한을 만료 시킬 수 있습니다.

3. 인증과 인가
* 인증과 인가가 무엇인지 각각 설명해 주세요. 인증 : 사용자의 신원을 검증하는 행위로서 보안 프로세스에서 첫 번째 단계(로그인) 인가 : 사용자에게 특정 리소스나 기능에 액세스 할 수 있는 권한을 부여하는 프로세스 (젭에서 예를 들면 매니저권한?)
* 과제에서 구현한 Middleware는 인증에 해당하나요? 인가에 해당하나요? 그 이유도 알려주세요. —> 인증에 해당합니다. 왜냐하면 토큰의 검증을 할 뿐 액세스 권한 자체에 대한 허가를 담당하지 않기 때문입니다.


4. Http Status Code
* 과제를 진행하면서 사용한 Http Status Code를 모두 나열하고, 각각이 의미하는 것과 어떤 상황에 사용했는지 작성해 주세요.
    * 400 : 클라이언트가 잘못된 요청을 보냄
    * 401 : 요청자는 인증 되지 않아 수행할 수 없음을 표현
    * 404 : 클라리언트가 요청한 자원이 존재하지 않음
    * 409 :  요청이 현재 서버의 상태와 충돌됨
    * 200 : 클라이언트의 요청을 서버가 정상적으로 처리
    * 201 : 클라이언트의 요청을 서버가 정상적으로 처리했고, 새로운 리소스가 생김
      

5번(리팩토링)은 잘 모르겠습니다..


6. API 명세서
    * notion 혹은 엑셀에 작성하여 전달하는 것 보다 swagger 를 통해 전달하면 장점은 무엇일까요? —> 한눈에 알아보기 편하다?
