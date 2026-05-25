export type CommerceCategoryNode = {
  name: string
  children?: CommerceCategoryNode[]
}

export const commerceCategoryTree: CommerceCategoryNode[] = [
  {
    name: '食品饮料',
    children: [
      { name: '休闲零食', children: [{ name: '膨化食品/锅巴' }, { name: '坚果炒货' }, { name: '肉干肉脯' }, { name: '糖果巧克力' }, { name: '饼干糕点' }] },
      { name: '方便速食', children: [{ name: '方便面/拉面' }, { name: '自热火锅/自热米饭' }, { name: '速食粥/汤' }, { name: '罐头食品' }, { name: '预制菜' }] },
      { name: '饮料冲调', children: [{ name: '咖啡' }, { name: '茶饮/茶包' }, { name: '果汁/饮品' }, { name: '乳饮料' }, { name: '冲调谷物' }] },
      { name: '粮油调味', children: [{ name: '米面杂粮' }, { name: '食用油' }, { name: '调味酱料' }, { name: '南北干货' }, { name: '烘焙原料' }] },
      { name: '酒水茗茶', children: [{ name: '白酒' }, { name: '葡萄酒' }, { name: '啤酒' }, { name: '花草茶' }, { name: '传统茶叶' }] },
    ],
  },
  {
    name: '生鲜滋补',
    children: [
      { name: '水果蔬菜', children: [{ name: '应季水果' }, { name: '蔬菜净菜' }, { name: '菌菇' }, { name: '沙拉轻食' }] },
      { name: '肉禽蛋品', children: [{ name: '猪牛羊肉' }, { name: '禽肉' }, { name: '蛋类' }, { name: '冷冻肉制品' }] },
      { name: '海鲜水产', children: [{ name: '鱼类' }, { name: '虾蟹贝类' }, { name: '海产干货' }, { name: '水产礼盒' }] },
      { name: '滋补养生', children: [{ name: '燕窝' }, { name: '人参/西洋参' }, { name: '枸杞/红枣' }, { name: '阿胶' }, { name: '药食同源食材' }] },
    ],
  },
  {
    name: '美妆个护',
    children: [
      { name: '护肤', children: [{ name: '面霜/乳液' }, { name: '精华' }, { name: '面膜' }, { name: '洁面' }, { name: '防晒' }] },
      { name: '彩妆', children: [{ name: '粉底/底妆' }, { name: '口红/唇釉' }, { name: '眼影/眼线' }, { name: '腮红/修容' }, { name: '美妆工具' }] },
      { name: '洗护发', children: [{ name: '洗发水' }, { name: '护发素/发膜' }, { name: '染发/造型' }, { name: '头皮护理' }] },
      { name: '身体护理', children: [{ name: '沐浴露' }, { name: '身体乳' }, { name: '手足护理' }, { name: '香氛/香水' }] },
      { name: '口腔护理', children: [{ name: '牙膏' }, { name: '牙刷/电动牙刷' }, { name: '漱口水' }, { name: '牙线/冲牙器' }] },
    ],
  },
  {
    name: '服饰内衣',
    children: [
      { name: '女装', children: [{ name: '连衣裙' }, { name: '衬衫/T恤' }, { name: '外套' }, { name: '裤装' }, { name: '针织/毛衣' }] },
      { name: '男装', children: [{ name: 'T恤/卫衣' }, { name: '衬衫' }, { name: '夹克/外套' }, { name: '裤装' }, { name: '西装' }] },
      { name: '内衣家居服', children: [{ name: '文胸' }, { name: '内裤' }, { name: '睡衣/家居服' }, { name: '袜子' }, { name: '保暖内衣' }] },
      { name: '童装', children: [{ name: '儿童套装' }, { name: '儿童外套' }, { name: '儿童裙装' }, { name: '婴幼儿服装' }] },
    ],
  },
  {
    name: '鞋靴箱包',
    children: [
      { name: '女鞋', children: [{ name: '单鞋' }, { name: '高跟鞋' }, { name: '休闲鞋' }, { name: '靴子' }, { name: '凉鞋' }] },
      { name: '男鞋', children: [{ name: '休闲鞋' }, { name: '商务鞋' }, { name: '运动休闲鞋' }, { name: '靴子' }, { name: '凉拖' }] },
      { name: '箱包', children: [{ name: '女包' }, { name: '男包' }, { name: '旅行箱' }, { name: '双肩包' }, { name: '钱包/卡包' }] },
      { name: '配饰', children: [{ name: '帽子' }, { name: '围巾/丝巾' }, { name: '腰带' }, { name: '手套' }, { name: '太阳镜' }] },
    ],
  },
  {
    name: '家居生活',
    children: [
      { name: '家纺布艺', children: [{ name: '床品套件' }, { name: '被芯/枕芯' }, { name: '毛巾浴巾' }, { name: '窗帘' }, { name: '地毯地垫' }] },
      { name: '厨具餐具', children: [{ name: '锅具' }, { name: '刀具砧板' }, { name: '餐具' }, { name: '水杯/保温杯' }, { name: '厨房收纳' }] },
      { name: '收纳清洁', children: [{ name: '收纳盒/柜' }, { name: '衣架晾晒' }, { name: '清洁工具' }, { name: '纸品湿巾' }, { name: '洗衣清洁' }] },
      { name: '家装软饰', children: [{ name: '装饰画' }, { name: '香薰蜡烛' }, { name: '摆件' }, { name: '灯饰' }, { name: '花艺绿植' }] },
      { name: '家具', children: [{ name: '沙发' }, { name: '床/床垫' }, { name: '桌椅' }, { name: '柜类' }, { name: '儿童家具' }] },
    ],
  },
  {
    name: '家用电器',
    children: [
      { name: '大家电', children: [{ name: '冰箱' }, { name: '洗衣机' }, { name: '空调' }, { name: '电视' }, { name: '热水器' }] },
      { name: '厨房电器', children: [{ name: '电饭煲' }, { name: '空气炸锅' }, { name: '破壁机' }, { name: '咖啡机' }, { name: '净水器' }] },
      { name: '生活电器', children: [{ name: '吸尘器' }, { name: '扫地机器人' }, { name: '加湿器' }, { name: '空气净化器' }, { name: '挂烫机' }] },
      { name: '个护电器', children: [{ name: '吹风机' }, { name: '剃须刀' }, { name: '美容仪' }, { name: '按摩器' }, { name: '电动牙刷' }] },
    ],
  },
  {
    name: '3C数码',
    children: [
      { name: '手机通讯', children: [{ name: '手机' }, { name: '手机壳膜' }, { name: '充电器/数据线' }, { name: '移动电源' }, { name: '手机支架' }] },
      { name: '电脑办公', children: [{ name: '笔记本电脑' }, { name: '台式机/主机' }, { name: '显示器' }, { name: '键盘鼠标' }, { name: '打印机' }] },
      { name: '智能设备', children: [{ name: '智能手表' }, { name: '智能音箱' }, { name: 'VR/AR设备' }, { name: '无人机' }, { name: '智能摄像头' }] },
      { name: '影音娱乐', children: [{ name: '耳机' }, { name: '音箱' }, { name: '相机' }, { name: '镜头' }, { name: '游戏机' }] },
    ],
  },
  {
    name: '母婴玩具',
    children: [
      { name: '喂养用品', children: [{ name: '奶瓶奶嘴' }, { name: '吸奶器' }, { name: '儿童餐具' }, { name: '辅食机' }] },
      { name: '尿裤洗护', children: [{ name: '纸尿裤' }, { name: '湿巾' }, { name: '婴童洗护' }, { name: '婴儿护肤' }] },
      { name: '童车童床', children: [{ name: '婴儿推车' }, { name: '安全座椅' }, { name: '婴儿床' }, { name: '儿童桌椅' }] },
      { name: '玩具益智', children: [{ name: '积木拼插' }, { name: '毛绒玩具' }, { name: '模型手办' }, { name: '早教玩具' }, { name: '户外玩具' }] },
    ],
  },
  {
    name: '运动户外',
    children: [
      { name: '运动服饰', children: [{ name: '运动T恤' }, { name: '运动裤' }, { name: '瑜伽服' }, { name: '运动内衣' }, { name: '运动袜' }] },
      { name: '运动鞋包', children: [{ name: '跑步鞋' }, { name: '篮球鞋' }, { name: '户外鞋' }, { name: '运动包' }, { name: '护具' }] },
      { name: '健身器材', children: [{ name: '哑铃' }, { name: '瑜伽垫' }, { name: '跑步机' }, { name: '筋膜枪' }, { name: '跳绳' }] },
      { name: '户外装备', children: [{ name: '帐篷' }, { name: '睡袋' }, { name: '露营桌椅' }, { name: '登山杖' }, { name: '户外照明' }] },
    ],
  },
  {
    name: '宠物用品',
    children: [
      { name: '宠物食品', children: [{ name: '猫粮' }, { name: '狗粮' }, { name: '宠物零食' }, { name: '处方粮/功能粮' }] },
      { name: '宠物日用', children: [{ name: '猫砂' }, { name: '食盆水碗' }, { name: '牵引用品' }, { name: '宠物窝垫' }] },
      { name: '宠物清洁', children: [{ name: '洗护香波' }, { name: '梳毛工具' }, { name: '除味消毒' }, { name: '尿垫清洁' }] },
      { name: '宠物玩具服饰', children: [{ name: '逗猫玩具' }, { name: '磨牙玩具' }, { name: '宠物服装' }, { name: '宠物配饰' }] },
    ],
  },
  {
    name: '汽车用品',
    children: [
      { name: '车载电器', children: [{ name: '行车记录仪' }, { name: '车载充电器' }, { name: '车载冰箱' }, { name: '胎压监测' }] },
      { name: '美容清洁', children: [{ name: '洗车工具' }, { name: '车蜡镀膜' }, { name: '内饰清洁' }, { name: '玻璃水' }] },
      { name: '汽车内饰', children: [{ name: '脚垫' }, { name: '座垫' }, { name: '方向盘套' }, { name: '香薰摆件' }] },
      { name: '维修保养', children: [{ name: '机油' }, { name: '滤清器' }, { name: '轮胎' }, { name: '应急工具' }] },
    ],
  },
  {
    name: '珠宝配饰',
    children: [
      { name: '黄金珠宝', children: [{ name: '黄金饰品' }, { name: '钻石' }, { name: '翡翠玉石' }, { name: '珍珠' }] },
      { name: '时尚饰品', children: [{ name: '项链' }, { name: '耳饰' }, { name: '戒指' }, { name: '手链/手镯' }, { name: '胸针' }] },
      { name: '腕表眼镜', children: [{ name: '机械表' }, { name: '石英表' }, { name: '智能表配件' }, { name: '眼镜框' }, { name: '太阳镜' }] },
      { name: '文玩收藏', children: [{ name: '手串' }, { name: '摆件' }, { name: '钱币邮票' }, { name: '收藏礼品' }] },
    ],
  },
  {
    name: '图书文具',
    children: [
      { name: '图书', children: [{ name: '文学小说' }, { name: '童书绘本' }, { name: '经管励志' }, { name: '考试教材' }, { name: '生活艺术' }] },
      { name: '文具耗材', children: [{ name: '笔类' }, { name: '本册便签' }, { name: '文件收纳' }, { name: '美术画材' }, { name: '办公耗材' }] },
      { name: '办公设备', children: [{ name: '计算器' }, { name: '碎纸机' }, { name: '装订设备' }, { name: '投影设备' }] },
      { name: '乐器音像', children: [{ name: '吉他' }, { name: '键盘乐器' }, { name: '传统乐器' }, { name: '音像制品' }] },
    ],
  },
  {
    name: '医疗健康',
    children: [
      { name: '营养保健', children: [{ name: '维生素矿物质' }, { name: '蛋白粉' }, { name: '益生菌' }, { name: '鱼油' }, { name: '膳食补充剂' }] },
      { name: '医疗器械', children: [{ name: '血压计' }, { name: '血糖仪' }, { name: '体温计' }, { name: '制氧机' }, { name: '护理床/轮椅' }] },
      { name: '健康护理', children: [{ name: '口罩' }, { name: '创口贴' }, { name: '消毒用品' }, { name: '眼部护理' }, { name: '康复护具' }] },
      { name: '成人健康', children: [{ name: '计生用品' }, { name: '私密护理' }, { name: '健康监测' }, { name: '护理用品' }] },
    ],
  },
]
