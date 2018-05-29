using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Security.Principal;
using System.Web.Script.Services;
using System.Web.Services;
using Newtonsoft.Json;

/// <summary>
/// Opis podsumowujący dla WebService
/// </summary>
public class WebService
{
    public WebService()
    {
        //
        // TODO: Tutaj dodaj logikę konstruktora
        //
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public static string getNaprawy()
    {
        return Naprawy.getNaprawy();
    }

}