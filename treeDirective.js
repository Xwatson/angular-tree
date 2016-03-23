/**
 * Created by xuwusheng on 16/3/23.
 */
define(['../app'], function (app) {
    //tree
    app.directive('pl4Tree',[function () {
        return {
            restrict:'EA',
            replace:true,
            scope:{
                result:'=result'
            },
            template:'<ul class="pl4-tree" pl4-template="result" ng-repeat="item in $result">' +
                        '<li>{{item.title}}' +
                            '<ul>' +
                                '<li pl4-recurse="item.item"></lipl4Recurse>' +
                            '</ul>' +
                        '</li>' +
                     '</ul>',
            link: function (scope,ele,attr) {
                //console.log(scope)
            }
        }
    }]);
    //接收数据
    app.directive('pl4Template',[function () {
        return {
            restrict:'A',
            priority:2000,//提高指令优先级,在ng-repeat之前获取数据
            compile: function (ele,attr) {
                //保存模板
                var tmpl=ele[0].outerHTML;
                return function (scope,ele,attr) {
                    scope.$template=tmpl;
                    if(!scope.$result)
                        scope.$result=scope.$eval(attr.pl4Template);
                }
            }
        }
    }]);
    //生成子node
    app.directive('pl4Recurse',['$compile',function ($compile) {
        return {
            restrict:'A',
            link: function (scope,ele,attr) {
                //建立独立作用域
                var recScope=scope.$new(true);
                recScope.$result=scope.$eval(attr.pl4Recurse);
                //生成子node
                var cmp=$compile(scope.$parent.$template)(recScope);
                ele.replaceWith(cmp);
            }
        }
    }]);
});
