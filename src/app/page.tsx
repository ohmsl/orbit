import ForumCategories from "@/components/Forum/ForumCategories/ForumCategories";
import Hero from "@/components/Forum/Hero";
import View from "@/components/View";

export default function Home() {
  return (
    <View>
      <Hero
        title={
          <>
            Welcome to <b>ORBIT.</b>
          </>
        }
        subtitle="Join the conversation and share your thoughts with the community."
      />
      <ForumCategories />
    </View>
  );
}
