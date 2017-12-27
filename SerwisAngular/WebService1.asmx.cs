using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace SerwisAngular
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : WebService
    {

        [WebMethod]

        public string GetCurrentTime(string name)

        {

            return "Hello " + name + Environment.NewLine + "The Current Time is: "

                + DateTime.Now.ToString();

        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
