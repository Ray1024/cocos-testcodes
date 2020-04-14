var testNode = cc.Node.extend({
    ctor: function () {
        this._super();
    },
    /////////////////////////////////////////////////////////
    // 测试代码

    testClip: function () {
        var theNode = new cc.Sprite();
        JoyE.setSpriteFrame(theNode, "btnbg2.png", null, null);
        theNode.setAnchorPoint(0, 0);
        // 蒙版裁剪
        var theMask = new cc.LayerColor(cc.color(0, 0, 0, 255));
        theMask.anchorX = 0;
        theMask.anchorY = 0;
        theMask.x = 0;
        theMask.y = 0;
        theMask.setContentSize(cc.size(theNode.width * 0.01, theNode.height * 2));

        var barClipNode = new cc.ClippingNode();
        barClipNode.attr({
            width: theNode.width,
            height: theNode.height * 2,
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: - theNode.height * 0.5
        });
        barClipNode.setLocalZOrder(999);
        barClipNode.addChild(theNode);
        barClipNode.setInverted(false);
        barClipNode.setStencil(theMask);
        barClipNode.setPosition(this.map.logicPosTolocalPos(19, 19));
        theNode.y = theNode.y + theNode.height * 0.5;
        this.map.m_buildingsNode.addChild(barClipNode);

        var count = 100;
        var timmerId = setInterval(() => {
            count--;
            if (count > 0) {
                theMask.width = theNode.width * (100 - count) / 100;
            }
            else {
                clearInterval(timmerId);
            }
        }, 100);
    },

        // // 圆形

        // var radiusOut = Math.sqrt(Math.pow(32 * 220 / 2, 2) + Math.pow(32 * 155 / 2, 2));
        // var radiusIn = Math.sqrt(Math.pow(28 * 220 / 2, 2) + Math.pow(28 * 155 / 2, 2));
        // var center = this.map.logicPosTolocalPos(32, 32);

        // for (var i = 0; i < 50; i++) {
        //     var sp = JoyE.addChild(this.map.m_buildingsNode, "monster.png", false, null, null);
        //     // var pos = this.map.logicPosTolocalPos(0, 32);
        //     // pos.x+=Math.random()*1000-2000;
        //     // pos.y+=Math.random()*1000-2000;
        //     var pos = cc.p();
        //     pos.x = Math.cos((i / 50 * 360) * Math.PI / 180) * radiusOut;
        //     pos.y = Math.sin((i / 50 * 360) * Math.PI / 180) * radiusOut;
        //     pos.y *= 0.7;
        //     pos.x += center.x;
        //     pos.y += center.y;
        //     var posTo = cc.p();
        //     posTo.x = Math.cos((i / 50 * 360) * Math.PI / 180) * radiusIn;
        //     posTo.y = Math.sin((i / 50 * 360) * Math.PI / 180) * radiusIn;
        //     posTo.y *= 0.7;
        //     posTo.x += center.x;
        //     posTo.y += center.y;

        //     sp.setPosition(pos);
        //     sp.setAnchorPoint(cc.p(0.5, 0.5));
        //     sp.runAction(cc.sequence(cc.moveTo(5, posTo),
        //         cc.callFunc(function (node) {
        //             JoyE.setSpriteFrame(node, "monsterdead.png", null, null);
        //             node.runAction(cc.sequence(cc.fadeOut(2), cc.removeSelf()))
        //         })
        //     ));
        // }
});