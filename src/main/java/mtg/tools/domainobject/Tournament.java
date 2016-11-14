package mtg.tools.domainobject;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by t.gieselmann on 11/8/16.
 */
@Entity
public class Tournament
{
    public Date getDateCreated()
    {
        return dateCreated;
    }


    public String getName()
    {

        return name;
    }


    public void setName(String name)
    {
        this.name = name;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    private Date dateCreated;

    private String name;

}
