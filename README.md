Project nay duoc generator boi yeoman

*Cai dat yeoman, grunt, bower...

npm install -g yo grunt-cli bower


*Command de generator 1 project

npm install -g generator-angular-fullstack
mkdir example
cd example
yo angular-fullstack

*De chay project
+)Dau tien khi chay phai chay cau lenh (de install cac pakgage can thiet):

npm install 
bower install
+) Chay server

node server/app.js

hoac 

grunt serve

=> localhost:9000

=============================================================================

1. Viet 1 api vi du cho user phia server NodeJS

Trong server/api/member : 
* GET     /members              ->  index

2. angular js goi den nodejs

http://localhost:9000/member

Trong file controller member goi den api 
 $http.get('/api/members').success(function(members) {
      $scope.members = members;
    });

3. Tao 1 api phia server voi yeoman:

yo angular-fullstack:endpoint member

4. Tao component phia client voi yeoman:

yo angular-fullstack:route member

* Note: style code JavaScript

http://cuongbkvn.blogspot.jp/2015/04/javascipt-style-guide.html
