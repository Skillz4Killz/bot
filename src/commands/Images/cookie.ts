import { Command, Args, CommandOptions } from "@sapphire/framework";
import { Message, MessageEmbed } from "discord.js";
import { ApplyOptions } from "@sapphire/decorators";
import { PreConditions } from "@lib/types/Types";

@ApplyOptions<CommandOptions>({
    description: "commands/images:cookie.description",
    detailedDescription: "commands/images:cookie.detailedDescription",
    preconditions: [PreConditions.Permissions]
})
export class PenguCommand extends Command {

    public readonly images: Array<string> = [
        "http://i.imgur.com/SLwEY66.gif", "http://i.imgur.com/K6VoNp3.gif", "http://i.imgur.com/knVM6Lb.gif",
        "http://i.imgur.com/P1BMly5.gif", "http://i.imgur.com/I8CrTUT.gif", "https://i.imgur.com/0XTueQR.png",
        "https://i.imgur.com/u9k8x4J.png", "https://i.imgur.com/AUtfHnK.png", "https://i.imgur.com/XjTbrKc.png",
        "https://i.imgur.com/A3mgqEh.png", "https://i.imgur.com/YnkdGZd.png", "https://i.imgur.com/FJsOnOE.png",
        "https://i.imgur.com/RQFPwDg.png", "https://i.imgur.com/vyCTGr0.png", "https://i.imgur.com/kkXToc8.png",
        "https://i.imgur.com/ctHwqVL.png", "https://i.imgur.com/yUaCPvC.png", "https://i.imgur.com/IUM6Z8F.png"
    ];

    public async run(message: Message, args: Args) {
        const mentioned = await args.pick("user");
        const randomImage = this.images[Math.floor(Math.random() * this.images.length)];

        const embed = new MessageEmbed()
            .setFooter("PenguBot.com")
            .setTimestamp()
            .setColor("RANDOM")
            .setImage(randomImage);

        return message.channel.send(await message.fetchLanguageKey("commands/images:cookie.response", { from: `${message.author}`, to: `${mentioned}` }), { embed });
    }
}
