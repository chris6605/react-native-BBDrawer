# react-native-BBDrawer
侧边栏组件 支持设置宽度和左边或右边弹出
<BBDrawer 
  ref={ref => this.left = ref}
  side='left'
  width={300} >
    <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
</BBDrawer>

// 弹出
this.left.show()
