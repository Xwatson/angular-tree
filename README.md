# angular-tree
  递归实现tree
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
