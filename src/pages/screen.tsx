import React from "react";
import Head from "next/head";
import ContainerWithAside from "../components/Container/WithAside";
import BlogComponent from "../components/Blog";
import TestimonialComponent from "../components/Testimonial";
import FeatureComponent from "../components/Feature";
import { News, Totalizer } from "../types";
import { PublicPolicyData } from "./api/totalizador/politicas-publicas";
import ChartColumnLineWithPartner from "../components/Antdesign/ChartPlots/ColumnLineWithPartner";

type PropsInput = {
  handler: {
    totalizers: Array<Totalizer>;
    news: Array<News>;
    expenseAmount: number;
    expensePercentageReached: number;
    expenseProvided: number;
    revenueAmount: number;
    revenuePercentageReached: number;
    revenueProvided: number;
    expenseLoanding: boolean;
    revenueLoading: boolean;
    publicPolicies: PublicPolicyData[];
    graphConfig: any;
    publicPoliciesLoading: boolean;
    chartLoading: boolean;
  };
};

function Aside({ news }: { news: Array<News> }) {
  return (
    <div style={{ padding: "10px" }}>
      {news.map((item) => (
        <BlogComponent
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
          key={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
}

function HomeScreen({ handler }: PropsInput) {
  const {
    totalizers,
    news,
    expenseAmount,
    expensePercentageReached,
    expenseProvided,
    revenueAmount,
    revenuePercentageReached,
    revenueProvided,
    expenseLoanding,
    revenueLoading,
    publicPolicies,
    graphConfig,
    publicPoliciesLoading,
    chartLoading,
  } = handler;
  return (
    <ContainerWithAside aSide={<Aside news={news} />}>
      <Head>
        <title>Início</title>
      </Head>

      <FeatureComponent
        publicPolicies={publicPolicies}
        expenseAmount={expenseAmount}
        expensePercentageReached={expensePercentageReached}
        expenseProvided={expenseProvided}
        revenueAmount={revenueAmount}
        revenuePercentageReached={revenuePercentageReached}
        revenueProvided={revenueProvided}
        expenseLoanding={expenseLoanding}
        revenueLoading={revenueLoading}
        totalizers={totalizers}
        chart={graphConfig}
        publicPoliciesLoading={publicPoliciesLoading}
        chartLoading={chartLoading}
      />

      <TestimonialComponent />
    </ContainerWithAside>
  );
}

export default HomeScreen;
