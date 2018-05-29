using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

/// <summary>
/// Opis podsumowujący dla Naprawy
/// </summary>
[DataContract]
public class Naprawy
{
    [DataMember]
    public int Id { get; set; }
    public string Title { get; set; }

    public Naprawy(int id, string title)
    {
        Id = id;
        Title = title;
    }

    public static string getNaprawy()
    {
        DataSet ds = new DataSet();
        using (SqlConnection con = new SqlConnection(@Connection.CONNECTIONSTRING_SerwisDB))
        {
            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.Connection = con;
                cmd.CommandText = @"SELECT * from naprawy;";

                using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                {
                    da.Fill(ds);
                }
            }
        }
        return JsonConvert.SerializeObject(ds, Newtonsoft.Json.Formatting.None,
                    new JsonSerializerSettings
                    {
                        NullValueHandling = NullValueHandling.Ignore

                    });

    }

}