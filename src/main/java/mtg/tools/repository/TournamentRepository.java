package mtg.tools.repository;

import mtg.tools.domainobject.Tournament;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by t.gieselmann on 11/8/16.
 */

@RepositoryRestResource(collectionResourceRel = "tournament", path = "tournament")
public interface TournamentRepository extends PagingAndSortingRepository<Tournament, Long>
{
    List<Tournament> findByName(@Param("name") String name);

}
