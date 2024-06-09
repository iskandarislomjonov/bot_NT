const{Composer}=require("grammy")
const bot=new Composer();

bot.command("start",async(ctx)=>{
    await ctx.reply(
`<b>Assalomu Alaykum <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a> botimizga xush kelibsiz !</b>`,
{
    parse_mode:"HTML"
}
    )
})


module.exports=bot;