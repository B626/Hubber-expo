import { TopicsCard } from "./TopicsCard";

export const Topics = () => {
  return (
    <section className="pt-[80px] pb-[80px]">
      <div className="max-w-[1290px] mt-[0px] mr-auto mb-[0px] ml-auto pr-[15px] pl-[15px]">
        <h2 className="text-[55px] font-[Minecraft] mb-[44px] 3sm:text-[40px] 3sm:leading-[100%]">Discussion topics</h2>
        <div className="flex flex-wrap 3sm:grid 3sm:grid-cols-1 3sm:w-[100%]">
          <TopicsCard
            title={"What web 3.0 means for enterprises"}
            speaker={"Fred Zhou"}
          />
          <TopicsCard
            title={"Value creation in the meraverse"}
            speaker={"Adrian Zdunczek"}
          />
          <TopicsCard
            title={"The role of stablecoins in the decentralised ecosystem"}
            speaker={"Victoria Scholar"}
          />
          <TopicsCard
            title={"Daos: New breed of internet-native organizations"}
            speaker={"Stephen Lindsay"}
          />
          <TopicsCard
            title={"Maximizing esg impact with blockchain"}
            speaker={"Daniel Antcliff"}
          />
          <TopicsCard title={"Bridging defi and cefi"} speaker={"Ilyas Vali"} />
          <TopicsCard
            title={"Web 3 gaming: The new frontier?"}
            speaker={"Russell Armand"}
          />
          <TopicsCard
            title={"Decrypting the regulatory landscape of virtual assets"}
            speaker={"Danny Winn"}
          />
          <TopicsCard
            title={"Central bank digital currencies, and cross-border payments"}
            speaker={"Lex Sokolin"}
          />
        </div>
      </div>
    </section>
  );
};
