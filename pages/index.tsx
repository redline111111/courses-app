import { GetStaticProps } from "next";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";


export function Home({menu}: HomeProps): JSX.Element {
  return(
    <div>
        <Htag tag='h1'>Text</Htag>
        <Button appearance="primary" arrow="right">Button</Button>
        <Button appearance="ghost" arrow="down">Button</Button>
        <P size='l'>Большой</P>
        <P>Средний</P>
        <P size='s'>Маленький</P>
        <Tag size="s" >Ghost</Tag>
        <Tag size="m" color="red">Red</Tag>
        <Tag color="primary">Green </Tag>
        <Rating rating={4} isEditable = {true}/>
        
    </div>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps > = async () => {
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return{
    props:{
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}