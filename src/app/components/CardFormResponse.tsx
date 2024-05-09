'use client'
import { RingLoader } from 'react-spinners';
import ListTopics from './ListTopics';

interface CardFormResponseProps {
  resolvedResponse: any;
  loading: boolean;
}

function CardFormResponse({ resolvedResponse, loading }: CardFormResponseProps) {
    let formattedTextLines: string[] = [];

    let topics: boolean = true;
  
    if (resolvedResponse) {
      // Dividir el texto en líneas
      formattedTextLines = resolvedResponse.trim().split("\n");
      topics = false
    }
  
    return (
      <div className="Flex mx-2">
        <div className="bg-gradient-to-r mt-4 bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white">
            HERE WILL BE THE ANSWER!
          </h2>
        </div>
        <div className="bg-slate-800 shadow-md rounded-md px-8 mt-4 pt-6 pb-8 mb-4">
          {formattedTextLines.length > 0 && (
            <div>
              {formattedTextLines.map((line: string, index: number) => (
                <p key={index} className="text-white font-serif">{line}</p>
              ))}
            </div>
          )}

          {topics &&(
           <div className='text-gray-400'>
              <h2 className="text-2xl font-semibold text-center">
              ⭐ TEMAS ⭐ 
              </h2>
              <br/>
              <hr/>
              <br/>
              <ListTopics/>
           </div>
            
          
          )}

      {loading && (
                <div className="flex justify-center items-center h-32">
                  
                  <RingLoader color="#36D7B7" />

                  <p className="text-gray-500 ml-2">   Please wait, loading content</p>
                </div>
              )}
        </div>
      </div>
    );
  }
  
  export default CardFormResponse;