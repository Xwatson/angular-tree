# angular-tree
  递归实现tree
  原理就是指令的循环嵌套，为避免指令直接嵌套自身问题在编译阶段保存模板，link阶段动态生成dom错开时间间接的嵌套一次。详细请看代码[treeDirective](https://github.com/Xwatson/angular-tree/blob/master/treeDirective.js)
### 使用方法
    数据模型：
      $scope.tree=[
			{
				title:'treeParent1',
				item:[
					{
						title:'treeChild1',
						item:[
							{
								title:'treeChild1-1',
								item:[
									{
										title:'treeChild1-1-1'
									}
								]
							}
						]
					}
				]
			},
			{
				title:'treeParent2',
				item:[
					{
						title:'treeChild2',
						item:[
							{
								title:'treeChild2-1',
								item:[
									{
										title:'treeChild2-1-1'
									}
								]
							}
						]
					}
				]
			},
			...........
		]
### 页面使用
	  <pl4-tree result="tree"></pl4-tree>
