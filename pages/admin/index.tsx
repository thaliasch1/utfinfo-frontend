import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Container, FileForm, Images, Icons, Modal, NewPublication, ModalContainer, Logo, Buttons } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSlider } from "../../src/components/context";

export type SlideType = {
  id: number;
  img: string;
  description: string;
  time: number;
};

export default function Admin() {

  const { imgs, setImgs } = useSlider();
  const [ active, setIsActive ] = useState(false);
  const [ slide, setSlide ] = useState<SlideType>();
  const [ slideId, setSlideId] = useState(0);
  const [ updateModalActive, setUpdateModalActive ] = useState(false);
  const  router= useRouter();

  const url = process.env.BASE_URL;

  const getSlides = async () => {
    const response = await axios.get(`${url}/slides`);
    setImgs(response.data);
   };

  const getSlidesAndUpdate = async () => {
   
    await getSlides();
    router.reload()

  }

  const updateSlide = async (slide: any, id: number) => {
    
    setSlide(slide);
    setSlideId(id);
    setUpdateModalActive(true);
  }

  const deleteImg = async (id: number) => {
    await axios.delete(`${url}/slides/${id}`);
    toast.success("Imagem deletada com sucesso!"), {
      theme: "dark",
    
    }
    getSlides().catch((err) => alert(err));
  };

  useEffect(() => {
    getSlides().catch((err) => toast.error(`Erro ao carregar as imagens. ${err}`));
  }, []);
  

  return (
    <Container>
      <Head>
        <title>Admin UTFinfo</title>
      </Head>
    <ToastContainer autoClose={4000} />
    <Logo><img src="./logo.png" />  <NewPublication onClick={() => setIsActive(true)}> + Nova publicação</NewPublication></Logo>
    
      <FileForm>
      <Modal active={active}>
          <ModalContainer>
            <div>
          <form
            onSubmit={() => getSlidesAndUpdate()}
            action={`${url}/slides/upload`}
            encType="multipart/form-data"
            method="POST"
          > 
              <h3>Nova publicação</h3>
              <input name="pic" type="file" />
              <input
                name="time"
                type="number"
                placeholder={"Tempo imagem (segundos)"}
              />
            <span> Obs. O tempo padrão é de 8 segundos</span>
           
            <textarea name="description" placeholder="Descrição" maxLength={300} />
            <Buttons>
            <button type="submit">Salvar</button>
            <button type="submit">Cancelar</button>
            </Buttons>
           
          </form>

            <button className="close" onClick={() => setIsActive(false)}>X</button>
            </div>
          </ModalContainer>
      </Modal>

      <Modal active={updateModalActive}>
          <ModalContainer>
            <div>
            <form
             onSubmit={() => getSlidesAndUpdate()}
            action={`${url}/slides/update/${slideId}`}
            encType="multipart/form-data"
            method="POST"
          > 
          
              <h3>Atualizar publicação</h3>
              <input name="pic" type="file" />
              <input
                name="time"
                type="number"
                placeholder={"Tempo imagem (segundos)"}
                defaultValue={slide?.time}
              />
            <span> Obs. O tempo padrão é de 8 segundos</span>
            <textarea name="description" placeholder="Descrição" maxLength={300}  defaultValue={slide?.description} />
            <Buttons>
            <button type="submit">Atualizar</button>
            <button type="submit">Cancelar</button>
            </Buttons>
           
          </form>

            <button className="close" onClick={() => setUpdateModalActive(false)}>X</button>
            </div>
          </ModalContainer>
      </Modal>


      </FileForm>
    

            <Images>
              <table>
                 
                  <th>Imagem</th>
                  <th>Descrição</th>
                  <th>Tempo</th>
                  
                
               
        {imgs.map(( slide: any, index: any) => {
          return (
            <>
           
            
                <tr>
                  <td> <img src={slide.img} alt="a" /></td>
                  <td className="description">{slide.description}</td>
                  <td>{slide.time ? slide.time + "s" : "8s"}</td>
                  <td className="icon"><img className="icon" src="./trash.svg" onClick={() => deleteImg(slide.id)}/></td>
                  <td><img className="icon" src="./edit.svg" onClick={() => updateSlide(slide, slide.id)}/></td>
                  </tr>
             
                

         
              
            </>
          );
        })}
         </table>
      </Images>
    </Container>
  );
}
