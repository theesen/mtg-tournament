package mtg.tools;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class TournamentApplication
{


    public static void main(String[] args)
    {
        ApplicationContext ctx = SpringApplication.run(TournamentApplication.class, args);

        System.out.println("Let's fire up the magic tournament organizer!");
    }
}
