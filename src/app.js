const {Bot,session}=require("grammy")
const config=require("../config")
const bot=new Bot(config.TOKEN)

const commandsModule=require("./modules/command");
const registerModule= require("./modules/register.module");
bot.use(commandsModule);

bot.use(registerModule)

bot.use(session({
     initial: () => ({ 
        step:"birinchi", 
    }) ,
}))
bot.start()