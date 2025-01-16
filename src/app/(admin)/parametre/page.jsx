
import Image from "next/image";
import { AiFillSetting } from "react-icons/ai";
import { IoStorefrontSharp } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { HiReceiptTax } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

export default function Parametre() {
  return (
    <div className="overflow-y-auto">
      <div className="ml-0 transition-all 0.3 min-h-[100vh] pb-10">
  {/* Start Container Fluid */}
  <div className="w-ful mr-auto ml-auto justify-center ">
    <div className="flex flex-wrap mt-0">
      <div className=" w-full flex   flex-shrink-0 flex-grow-0 flex-auto max-w-full mt-0">
        <div className=" w-full  shadow-xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="border-b-[#eaedf1]  px-12 border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="lg:text-[1rem] md:text-[1rem] text-sx font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><AiFillSetting className="text-orange-600 opacity-[1] text-[20px]"/>Paramètres généraux</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 lg:flex-auto w-full p-[1.5rem]">
            {/* responsive  */}
            <div className="flex flex-col lg:flex-row w-full flex-wrap mt-0 ">
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block flex-col">
                    <label htmlFor="meta-name" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Méta Titre</label>
                    <input type="text" id="meta-name" className="block w-full m-0 p-2 text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " placeholder="Title" />
                  </div>
                </form>
              </div>
              <div className=" flex-col flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block  ">
                    <label htmlFor="meta-tag" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Mot-clé de la balise méta</label>
                    <input type="text" id="meta-tag" className="block w-full p-2 text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " placeholder="Enter word" />
                  </div>
                </form>
              </div>
              <div className=" flex-col flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-3 flex flex-col ">
                    <label htmlFor="themes" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Thèmes de la boutique</label>
                    <select className=" cursor-pointer mb-[10px] position p-2 relative overflow-hidden text-sm block w-full  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " id="themes" data-choices data-choices-groups data-placeholder="Select Themes">
                      <option value>Defaut</option>
                      <option value="Dark">Dark</option>
                      <option value="Minimalist">Minimalist</option>
                      <option value="High Contrast">High Contrast</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className=" flex-col flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-3 flex flex-col">
                    <label htmlFor="layout" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Mise en page</label>
                    <select className=" pt-[0.5rem] pb-[0.5rem] pr-[1rem] flex-none pl-[1rem]  block mb-[10px] cursor-pointer p-2 position relative overflow-hidden  text-sm w-full text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " id="layout" data-choices data-choices-groups data-placeholder="Select Layout">
                      <option className="p-[1rem] w-full h-10 block" value>Defaut</option>
                      <option  className="p-[1rem] block" value="Electronics">Electronique</option>
                      <option  className="p-[1rem] block" value="Fashion">Fashion</option>
                      <option  className="p-[1rem] block" value="Dining">Dining</option>
                      <option  className="p-[1rem] block" value="Interior">Interior</option>
                      <option  className="p-[1rem] block" value="Home">Home</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className=" flex-shrink-0 w-full max-w-full pr-[1.5rem] pl-[1.5rem] mt-0">
                <div className="flex flex-col">
                  <label htmlFor="description" className="mb-[0.4rem] text-[ 0.875rem] font-medium text-[#5d7186]">Description</label>
                  <textarea className="block mb-[10px] cursor-pointer position relative overflow-hidden text-sm w-full p-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] rounded-[0.5rem] ease-in-out duration-[0.15s] delay-0 " id="description" rows={4} placeholder="Description de type" defaultValue={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* paramètres du magasin */}
    <div className="flex flex-wrapjustify-center mt-0">
      <div className=" w-full flex-shrink-0 flex-grow-0 flex-auto max-w-full mt-0">
        <div className="shadow-xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="border-b-[#eaedf1] lg:px-20 px-12 border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><IoStorefrontSharp className="opacity-[1] text-[20px] text-orange-600" /> Store Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <div className="flex flex-wrap flex-col lg:flex-row mt-0 mr-[1.5rem] ml-[1.5rem]">
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block"> 
                    <label htmlFor="store-name" className="mb-[0.4rem]  text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Store Name</label>
                    <input type="text" id="store-name" className="block  p-2 order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Enter name" />
                  </div>
                </form>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="owner-name" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Store Owner Full Name</label>
                    <input type="text" id="owner-name" className="block  order-last p-2 m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Full name" />
                  </div>
                </form>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <div className="mb-[1.5rem] block">
                  <label htmlFor="schedule-number" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Owner Phone number</label>
                  <input type="number" id="schedule-number" name="schedule-number" className="block  p-2 order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Number" />
                </div>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 max-w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form  className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="schedule-email" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Owner Email</label>
                    <input type="email" id="schedule-email" name="schedule-email" className="block  p-2 order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="Email" />
                  </div>
                </form>
              </div>
              {/* full address */}
              <div className=" flex-grow-0 flex-shrink-0 flex-auto w-full max-w-full lg:pr-[1.5rem] lg:pl-[1.5rem] m-0 block">
                <div className="mb-[1.5rem] block">
                  <label htmlFor="address" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Full Address</label>
                  <textarea className="min-h-[1px] bg-[#fcfcfd] block w-full pt-[0.5rem] pb-[0.5rem] pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] resize-y m-0" id="address" rows={3} placeholder="Type address" defaultValue={""} />
                </div>
              </div>
              {/* zip code  */}
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/3 w-full  lg:pr-[1.5rem] lg:pl-[1.5rem] m-0 block">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="your-zipcode" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Zip-Code</label>
                    <input type="number" id="your-zipcode" className="block p-2  order-last m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s] " placeholder="zip-code" />
                  </div>
                </form>
              </div>
              {/* city */}
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/3 w-full  lg:pr-[1.5rem] lg:pl-[1.5rem] m-0 block">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-city" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">City</label>
                    <select className="cursor-pointer w-full border-[1px] p-2 rounded-[0.5rem] m-0 position relative overflow-hidden text-[16px] block" data-choices data-choices-groups data-placeholder="Select City" name="choices-city">
                      <option value>Choose a city</option>
                      <optgroup label="UK">
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                      </optgroup>
                      <optgroup label="FR">
                        <option value="Paris">Paris</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                      </optgroup>
                      <optgroup label="DE" disabled>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Munich">Munich</option>
                        <option value="Berlin">Berlin</option>
                      </optgroup>
                      <optgroup label="US">
                        <option value="New York">New York</option>
                        <option value="Washington" disabled>
                          Washington
                        </option>
                        <option value="Michigan">Michigan</option>
                      </optgroup>
                      <optgroup label="SP">
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Malaga">Malaga</option>
                      </optgroup>
                      <optgroup label="CA">
                        <option value="Montreal">Montreal</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/3 w-full  lg:pr-[1.5rem] lg:pl-[1.5rem] m-0 block">
                <form className="block mt-[0em]">
                  <label htmlFor="choices-country" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Country</label>
                  <select className="cursor-pointer m-0 position w-full relative border-[1px] p-2 rounded-[0.5rem] overflow-hidden text-[16px] block" id="choices-country" data-choices data-choices-groups data-placeholder="Select Country" name="choices-country">
                    <option value>Choose a country</option>
                    <optgroup label>
                      <option value>United Kingdom</option>
                      <option value="Fran">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="U.S.A">U.S.A</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Germany">Germany</option>
                      <option value="Spain">Spain</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                    </optgroup>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* paramètre de Localization */}
    <div className="flex flex-wrap mt-0  justify-center">
      <div className=" w-full flex-shrink-0 flex-grow-0 flex-auto max-w-full  mt-0">
        <div className="shadow-xl shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="  border-b-[#eaedf1] border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] px-12 font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><ImLocation className="opacity-[1] text-[20px] text-orange-600"/>Localization Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <div className="flex flex-wrap flex-col lg:flex-row mt-0 mr-[1.5rem] ml-[1.5rem]">
              <div className="position relative flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form  className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-country1" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Country</label>
                    <select className="block order-last p-2 m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-country1" data-choices data-choices-groups data-placeholder="Select Country" name="choices-country">
                      <option value>Choose a country</option>
                      <optgroup label>
                        <option value>United Kingdom</option>
                        <option value="Fran">France</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="U.S.A">U.S.A</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                        <option value="Germany">Germany</option>
                        <option value="Spain">Spain</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form  className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-language" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Language</label>
                    <select className="block order-last p-2 m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-language" data-choices data-choices-groups data-placeholder="Select language" name="choices-language">
                      <option value>English</option>
                      <optgroup label>
                        <option value>Russian</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Turkish">Turkish</option>
                        <option value="German">German</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Italian">Italian</option>
                        <option value="Catalán">Catalán</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Japanese">Japanese</option>
                        <option value="French">French</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-currency" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Currency</label>
                    <select className="block order-last p-2 m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-currency" data-choices data-choices-groups data-placeholder="Select Currency" name="choices-currency">
                      <option value>Us Dollar</option>
                      <optgroup label>
                        <option value>Pound</option>
                        <option value="Indian Rupee">Indian Rupee</option>
                        <option value="Euro">Euro</option>
                        <option value="Australian Dollar">Australian Dollar</option>
                        <option value="Japanese Yen">Japanese Yen</option>
                        <option value="Korean Won">Korean Won</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form className="block mt-[0em]">
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-length" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Length Class</label>
                    <select className="block order-last p-2 m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-length" data-choices data-choices-groups data-placeholder="Select Length" name="choices-length">
                      <option value>Centimeter</option>
                      <optgroup label>
                        <option value>Millimeter</option>
                        <option value="Inch">Inch</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto lg:w-1/2 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
                <form>
                  <div className="mb-[1.5rem] block">
                    <label htmlFor="choices-weight" className="mb-[0.4rem] text-[0.875rem] font-medium text-[#5d7186] inline-block cursor-default">Weight Class</label>
                    <select className="block order-last p-2 m-0 items-start cursor-text normal-case indent-0 drop-shadow-none tracking-normal w-full pt-[ 0.5rem]  pb-[ 0.5rem] pr-[1rem] pl-[1rem]  text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-white bg-clip-padding border-[1px] border-[#d8dfe7] rounded-[0.5rem] transition ease-in-out shadow shadow-[0.15s]" id="choices-weight" data-choices data-choices-groups data-placeholder="Select Weight" name="choices-weight">
                      <option value>Kilogram</option>
                      <optgroup label>
                        <option value>Gram</option>
                        <option value="Pound">Pound</option>
                        <option value="Ounce">Ounce</option>
                      </optgroup>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* catégories des paramètres */}
    <div className=" flex justify-center items-center flex-wrap mt-0 ">
      <div className=" lg:flex-grow-0 lg:flex-shrink-0 lg:flex-auto lg:w-1/4 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
        <div className="shadow-xl lg:w-full shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white m-[0.75rem] flex  flex-col">
          <div className=" border-b-[#eaedf1] border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] font-semibold text-sm m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><GiCardboardBoxClosed className="opacity-[1] text-[20px] text-orange-600"/> Categories Settings</h4>
          </div>
          {/* Category Product Count */}
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-6">
            <p className="text-sm">Category Product Count </p>
            <div className="flex gap-6 justify-start ml-6 items-center m-4">
              <div className="block min-h-[1.612em] mb-0">
                <input className="cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal " type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked  style={{border:"#ff6c2f", backgroundImage: `url(/download.svg)`}}/>
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px]  leading-normal text-inherit" type="radio" name="flexRadioDefault" id="flexRadioDefault2" style={{border:"rgba(0, 0, 0, 0.175)"}} />
                <label className="cursor-pointer font-medium inline-block " htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
            <form className="block mt-[0em] isolate">
              <div className="mb-[0.375rem] pb-[0.375rem] block isolate mt-4">
                <label htmlFor="mb-[0.4rem] text-[0.875rem] text-[#5d7186] cursor-default inline-block" className="form-label">Default Items Per Page</label>
                <input type="number" id="items-par-page" className="block w-full mt-3 pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder={1000} />
              </div>
            </form>
          </div>
        </div>
      </div>
    
      {/* Allow Reviews */}
      <div className=" justify-center flex-grow-0 flex-shrink-0 flex-auto lg:w-1/4 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
        <div className="shadow-xl lg:w-full shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="  border-b-[#eaedf1] border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] font-semibold m-0 flex items-center gap-[0.375rem] text-[#313b5e]"><MdOutlineReviews className="opacity-[1] text-[20px] text-orange-600"/>Reviews Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <p>Allow Reviews </p>
            <div className="flex gap-10 mt-2 items-center ml-6 isolate mb-6">
              <div className="block min-h-[1.612em] isolate mb-0">
                <input className="  forced-color-adjust-auto cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] text-white w-[1.112em] bg-local field m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-inherit" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" defaultChecked style={{backgroundImage: `url(/download.svg)`}}/>
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault3">
                  Yes
                </label>
              </div>
              <div className="block min-h-[1.612em] isolate mb-0 ">
                <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0 " type="radio" name="flexRadioDefault2" id="flexRadioDefault4" style={{border:'rgba(0, 0, 0, 0.175)'}} />
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault4">
                  No
                </label>
              </div>
            </div>
            <p className="">Allow Guest Reviews </p>
            <div className="flex gap-10 mt-2 items-center ml-6 isolate mb-6">
              <div className="block min-h-[1.612em] isolate mb-0">
                <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0 " type="radio" name="flexRadioDefault3" id="flexRadioDefault5" />
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault5">
                  Yes
                </label>
              </div>
              <div className="block min-h-[1.612em] isolate mb-0">
                <input className=" forced-color-adjust-auto cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] text-white w-[1.112em] bg-local field m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-inherit" type="radio" name="flexRadioDefault3" id="flexRadioDefault6" defaultChecked style={{backgroundImage: `url(/download.svg)`}}/>
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault6">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Vouchers Settings */}
      <div className="  justify-center  flex-grow-0 flex-shrink-0 flex-auto lg:w-1/4 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
        <div className="shadow-xl lg:w-full shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className=" border-b-[#eaedf1] border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className="text-[1rem] gap-2 flex font-semibold m-0 gap-[0.375rem items-center flex] decoration-[#313b5e]"> <FaShopify className="text-[20px] opacity-[1] text-orange-600"/>Vouchers Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-[1.5rem]">
            <form className="block mt-[0em] isolate">
              <div className="block min-h-[1.612em] mb-0">
                <label htmlFor="min-vouchers" className="mb-[0.4rem] text-[0.875rem] decoration-[#5d7186] font-medium inline-block cursor-default">Minimum Vouchers</label>
                <input type="number" id="min-vouchers" className="block w-full pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder={1000} defaultValue={1} />
              </div>
            </form>
            <form>
              <div className>
                <label htmlFor="mex-vouchers" className="mt-7 text-[0.875rem] decoration-[#5d7186] font-medium inline-block cursor-default">Maximum Vouchers</label>
                <input type="number" id="mex-vouchers" className="block w-full pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder={1000} defaultValue={12} />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* paramètre fiscaux */}

      <div className=" justify-center flex-grow-0 flex-shrink-0 flex-auto lg:w-1/4 w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
        <div className="shadow-xl lg:w-full shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] mb-[1.5rem] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white m-[0.75rem] flex box- flex-col">
          <div className="border-b-[#eaedf1] border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className=" flex gap-2 text-[1rem] font-semibold m-0 gap-[0.375rem items-center flex] decoration-[#313b5e]"><HiReceiptTax className="text-[20px] opacity-[1] text-orange-600" />  Tax Settings</h4>
          </div>
          <div className="flex-shrink-1 flex-grow-1 flex-auto p-6">
            <p>Prices with Tax</p>
            <div className="flex gap-6 justify-start ml-6 items-center m-4">
              <div className="block min-h-[1.612em] mb-0">
                <input className="cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal " type="radio" name="flexRadioDefault4" id="flexRadioDefault7" defaultChecked style={{backgroundImage: `url(/download.svg)`}} />
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault7">
                  Yes
                </label>
              </div>
              <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0 " type="radio" name="flexRadioDefault4" id="flexRadioDefault8" />
                <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault8">
                  No
                </label>
              </div>
            </div>
            <form  className="block mt-[0em] isolat">
              <div className="mb-[0.375rem] pb-[0.375rem] block isolate mt-4">
                <label htmlFor="items-tax" className=" text-[0.875rem] text-[#5d7186] cursor-default inline-block">Default Tax Rate</label>
                <input type="text" id="items-tax" className="block w-full py-2  pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder={1000} defaultValue="18%" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* fin Vouchers Settings */}

    {/* paramètre clients */}
    <div className="gap-x-6 gap-y-0  flex  flex-wrap justify-center isolate  mt-0">
      <div className="justify-center w-full lg:pr-[1.5rem] lg:pl-[1.5rem] mt-0">
        <div className="shadow-xl mb-6 w-full   relative flex flex-col min-w-0 text-[#5d7186] bg-[#fffff] rounded-[0.75rem] shadow-[(0px 3px 4px 0px rgba(0, 0, 0, 0.03)] text-[#313b5e] border-[1px] border-b[#eaedf1] rounded-[0.75rem]  bg-transparent bg-white ">
          <div className="border-b-[#eaedf1] border-b-[1px] mt-0 p-[1.125rem] mb-0 bg-transparent">
            <h4 className=" flex gap-2 text-[1rem] font-semibold m-0 gap-[0.375rem items-center flex] decoration-[#313b5e]"><FaUser className="text-[20px] opacity-[1] text-orange-600"/> Customers Settings</h4>
          </div>
          <div className=" flex-shrink-1 flex-grow-1  flex-auto  border-box block isolate p-6">
            <div className="flex flex-col  lg:flex-row gap-y-6 gap-x-6 justify-between  box-sizing">
              <div className=" relative mr-3 border-r-[1px] border-r-[#eaedf1] flex-grow-0 flex-shrink-0 flex-auto  ">
                <p>Customers Online</p>
                <div className="flex gap-6 justify-start ml-6 items-center m-4">
                  <div className="block min-h-[1.612em] mb-0">
                    <input className="cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal " type="radio" name="flexRadioDefault5" id="flexRadioDefault9" defaultChecked style={{backgroundImage: `url(/download.svg)`}}/>
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault9">
                      Yes
                    </label>
                  </div>
                  <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                    <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0" type="radio" name="flexRadioDefault5" id="flexRadioDefault10" />
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault10">
                      No
                    </label>
                  </div>
                </div>
              </div>


              <div className=" mr-3 border-r-[1px] border-r-[#eaedf1] flex-grow-0 flex-shrink-0 flex-auto isolate">
                <p>Customers Activity</p>
                <div className="flex gap-6 justify-start ml-6 items-center m-4">
                  <div className="block min-h-[1.612em] mb-0">
                    <input className="cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal " type="radio" name="flexRadioDefault6" id="flexRadioDefault11" defaultChecked style={{backgroundImage: `url(/download.svg)`}} />
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault11">
                      Yes
                    </label>
                  </div>
                  <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                    <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0" type="radio" name="flexRadioDefault6" id="flexRadioDefault12" />
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault12">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative lg:mr-5 mr-3 border-r-[1px] border-r-[#eaedf1] flex-grow-0 flex-shrink-0 flex-auto isolate">
                <p className="mr-6">Customer Searches</p>
                <div className="flex gap-6 justify-start ml items-center m-4">
                  <div className="block min-h-[1.612em] mb-0">
                    <input className="cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal" type="radio" name="flexRadioDefault7" id="flexRadioDefault13" defaultChecked  style={{backgroundImage: `url(/download.svg`}}/>
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault13">
                      Yes
                    </label>
                  </div>
                  <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                    <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0" type="radio" name="flexRadioDefault7" id="flexRadioDefault14" />
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault14">
                      No
                    </label>
                  </div>
                </div>
              </div>


              <div className=" mr-3 justify-center border-r-[1px]  border-r-[#eaedf1] flex-grow-0 flex-shrink-0 flex-auto isolate">
                <p className="w-40 ">Allow Guest Checkout</p>
                <div className="flex gap-6    items-center m-4">
                  <div className="block min-h-[1.612em] mb-0">
                    <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0" type="radio" name="flexRadioDefault8" id="flexRadioDefault15" />
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault15">
                      Yes
                    </label>
                  </div>
                  <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                    <input className="cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal" type="radio" name="flexRadioDefault8" id="flexRadioDefault16" defaultChecked  style={{backgroundImage: `url(/download.svg`}}/>
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault16">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex-grow-0 flex-shrink-0 flex-auto isolate">
                <p className="w-40 mr-5 flex justify-end items-center">Login Display Price</p>
                <div className="flex gap-6 justify-start ml-6 items-center m-4">
                  <div className="block min-h-[1.612em] mb-0">
                    <input className="cursor-pointer rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] bg-white w-[1.112em] h-[1.112em] align-top bg-no-repeat bg-center  bg-contain border-[1px] leading-normal text-inherit forced-color-adjust-auto m-0" type="radio" name="flexRadioDefault9" id="flexRadioDefault17" />
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault17">
                      Yes
                    </label>
                  </div>
                  <div className="block min-h-[1.3125rem] pl-[1.612em] mb-0">
                    <input className="cursor-pointer bg-[#ff6c2f] border-[#ff6c2f] rounded-[50%] float-left ml-[-1.612em] mt-[0.125rem] w-[1.112em] bg-local m-0  h-[1.112em] align-top appearance-none bg-no-repeat bg-center bg-contain border-[1px] text-inherit leading-normal" type="radio" name="flexRadioDefault9" id="flexRadioDefault18" defaultChecked style={{backgroundImage: `url(/download.svg)`}}/>
                    <label className="cursor-pointer font-medium inline-block" htmlFor="flexRadioDefault18">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <form  className="block mt-[0em] isolat">
                  <div className="mb-[0.375rem] pb-[0.375rem] block isolate mt-4">
                    <label htmlFor="login-attempts" className="text-[0.875rem] text-[#5d7186] cursor-default inline-block">Max Login Attempts</label>
                    <input type="text" id="login-attempts" className="block lg:w-1/2 w-full py-2  pt-[0.5rem] pb-[0.5rem]  pr-[1rem] pl-[1rem] text-[0.875rem] font-normal leading-[1.5] text-[#5d7186] appearance-none bg-[#ffff] bg-clip-padding border-[1px] border[#d8dfe7] rounded-[0.5rem] transition ease-in-out" placeholder="max" defaultValue="1 hour" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-right block isolate ">
      <a href="#!" className="text-white mr-1 bg-[#ef5f5f] border-[1px] rounded-[0.75rem] px-[1rem] py-[0.5rem] border-[#ef5f5f] hover:text-white disabled:text-white disabled:bg-[#ef5f5f] disabled:border-[#ef5f5f] hover:bg-[#d75656] shadow shadow-[241, 119, 119] active:text-white active:bg-[#bf4c4c] active:border-[#b34747] active:shadow inset-[0 3px 5px rgba(0, 0, 0, 0.125)]">Cancel</a>
      <a href="#!" className="text-white bg-[#22c55e] border-[1px] rounded-[0.75rem] px-[1rem] py-[0.5rem] border-[#22c55e] hover:text-white disabled:text-white lg:mr-8 mr-3 w-full disabled:bg-[#22c55e] disabled:border-[#22c55e] hover:bg-[#1fb155] shadow shadow-[241, 119, 119] active:text-white hover:border-[#1fb155] active:bg-[#1b9e4b] active:border-[#1a9447] active:shadow inset-[0 3px 5px rgba(0, 0, 0, 0.125)]">Save Change</a>
    </div>
  </div>  
</div>

    </div>
  );
}
