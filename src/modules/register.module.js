const {Router}=require("@grammyjs/router")

const router=new Router((ctx)=>  ctx.session.step);

const birinchi=router.route("birirnchi");
birinchi.on(":text",async(ctx)=>{
    await ctx.reply("Ismingizni kiriting !")
    ctx.session.step="ikkinchi";
})
router.route("ikkinchi",async(ctx)=>{
    await ctx.reply("Familyangizni kiriting !")
    ctx.session.step="";
})
module.exports=router;