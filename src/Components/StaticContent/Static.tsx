import { useState } from 'react'
import { PenLine } from 'lucide-react'
import { Editor } from '@tinymce/tinymce-react'
import { useAppDispatch, useAppSlector } from '@/App/Store/Hooks'
import { updateTerms } from '@/Features/StaticSlice'

function Static() {

  const [ActiveTab, setActiveTab] = useState<'Terms' | 'Faq'>('Terms')
  const [Editing, SetEditing] = useState(false)

  const dispatch = useAppDispatch()
  const { terms } = useAppSlector((state) => state.static)

  const [tempcontent, setTempContent] = useState(terms)

  const handleEdit = () => {
    setTempContent(terms)
    SetEditing(true)
  }
  const config = import.meta.env
  console.log(config);
  


  const handleSubmit = () => {
    dispatch(updateTerms(tempcontent))
    SetEditing(false)
  }



  return (
    <div className='bg-white m-7 p-5 rounded-lg'>
      <div className='flex gap-4'>
        <button
          onClick={() => {
            setActiveTab('Terms')
            SetEditing(false)
          }}

          className={`px-10 py-2 rounded-full text-lg ${ActiveTab === 'Terms' ? 'bg-blue-600 text-white' : 'bg-gray-200'}
        }` }
        >
          Term & Conditions
        </button>
        <button
          onClick={() => {
            setActiveTab("Faq")
            SetEditing(false)
          }}
          className={`px-10 py-2 rounded-full text-lg ${ActiveTab === 'Faq' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Privacy policy
        </button>
      </div>
      <div>
        {ActiveTab === 'Terms' && (
          <>
            {
              !Editing && (

                <div>
                  <div className='rounded-lg bg-gray-200 mt-8 p-5'>
                    <div dangerouslySetInnerHTML={{ __html: terms }} />

                  </div>
                  <div>
                    <div className=' flex items-center relative mt-5'>


                      <button
                        onClick={handleEdit}
                        className=' flex gap-1 justify-center text-lg  bg-blue-600 text-white px-8 py-3 rounded-full'
                      >

                        Edit
                        <PenLine size={18} className='mt-1' />
                      </button>
                    </div>

                  </div>

                </div>

              )
            }
            {Editing && (
              <div className='mt-5'>
                <Editor
                  apiKey={config.VITE_API_KEY}
                  value={tempcontent}

                  onEditorChange={(content) => setTempContent(content)}
                  init={{
                    height: 500,
                    menubar: true,
                    plugins: "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount emoticons codesample directionality",
                    toolbar: `
                         undo redo |
                         formatselect fontfamily fontsize |
                         bold italic underline strikethrough |
                         forecolor backcolor |
                         alignleft aligncenter alignright alignjustify |
                         bullist numlist outdent indent |
                         link image media table |
                         removeformat code fullscreen
                      `,

                    toolbar_mode: "wrap",

                    content_style: `
                         body {
                           font-family: Arial, sans-serif;
                           font-size: 14px;
                         }
                         `
                  }}
                />
                <div className='flex gap-4 mt-4'>
                  <button
                    onClick={handleSubmit}
                    className='bg-blue-600 text-white px-6 py-2 rounded '
                  >
                    Save

                  </button>
                  <button
                    onClick={() => SetEditing(false)}
                    className='bg-red-500 text-white px-6 py-2 rounded '
                  >
                    Cancel

                  </button>

                </div>

              </div>
            )

            }
          </>
        )



        }
      </div>
      {
        ActiveTab === 'Faq' && (
          <div>
            <div className='rounded-lg bg-gray-200 mt-8 p-5'>
              <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis hic ullam?</h1>
              <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quia repellat, esse quo molestias hic. Veritatis, omnis tempora non dolorem sapiente nihil veniam et consectetur iure corrupti expedita cumque dicta quisquam eveniet vel delectus obcaecati a laudantium corporis ut amet sequi pariatur nobis officiis. Illo sed sint vitae distinctio modi!</p>
            </div>

          </div>
        )
      }


    </div>
  )
}

export default Static
